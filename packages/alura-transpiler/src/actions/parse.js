import fs from "fs";
import Stack from "../utils/stack.js";

const REGEX_MATCH_COMPONENT = /(\w+=[\w{}'"]+)/;
const REGEX_MATCH_INTERPOLATION = /({\w+})/;

const startingComponent = (token) => /(<[a-zA-Z]+)/.test(token);
const endingComponent = (token) => /(<\/[a-zA-Z]+>)/.test(token);
const isAutoCloseTag = (token) => token.endsWith("/>");

const getParams = (params) => {
  return params.map((param) => {
    const [name, rawValue] = param.split("=");
    const value = rawValue.slice(1, -1);
    const isJSXInterpolation = rawValue.startsWith("{");
    const valueNumber = parseInt(value, 10);
    const isNumber = !Number.isNaN(valueNumber);

    if (isNumber) {
      return {
        name,
        type: "number",
        value: valueNumber,
      };
    }

    return {
      name,
      type: isJSXInterpolation ? "variable" : "string",
      value,
    };
  });
};

const stack = new Stack();

const parse = (tokens) => {
  fs.writeFileSync("temp/tokens.js", JSON.stringify(tokens));

  const ast = [];
  let indexToken = 0;
  const getNextToken = () => tokens[indexToken++];
  let token = getNextToken();

  const parseComponent = (currentToken) => {
    const isComponentAutoClose = isAutoCloseTag(currentToken);
    const [rawTag, ...params] = currentToken
      .slice(1, isComponentAutoClose ? -2 : -1)
      .split(REGEX_MATCH_COMPONENT)
      .filter((item) => item.trim());

    stack.push(rawTag.trim());
    const node = {
      type: "component",
      tag: rawTag.trim(),
      params: getParams(params),
      children: [],
    };

    if (isComponentAutoClose) {
      rawTag.trim();
      return node;
    }

    let nextToken = getNextToken();

    while (nextToken) {
      if (endingComponent(nextToken)) {
        if (rawTag.trim() === stack.pop()) {
          return node;
        }
      }

      if (!startingComponent(nextToken)) {
        if (nextToken.trim() === "\n") {
          node.children = node.children.concat(nextToken);
        } else {
          const innerValue = nextToken
            .split(REGEX_MATCH_INTERPOLATION)
            .filter(Boolean)
            .map((_value) => ({
              type: _value.startsWith("{") ? "variable" : "text",
              value: _value.startsWith("{") ? _value.slice(1, -1) : _value,
            }));

          node.children = node.children.concat(innerValue);
        }
      }

      if (startingComponent(nextToken)) {
        const innerNode = parseComponent(nextToken);
        node.children = node.children.concat(innerNode);
      }

      nextToken = getNextToken();
    }
  };

  while (token) {
    if (!startingComponent(token)) {
      const node = {
        type: "text",
        value: token,
      };

      ast.push(node);
    }

    if (startingComponent(token)) {
      const node = parseComponent(token);
      ast.push(node);
    }

    token = getNextToken();
  }

  return ast;
};

export default parse;

#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import aluraTranspiler, { readFile, saveFile } from "alura-transpiler";
import swc from "@swc/core";

const REGEX_MATCH_ROOT = /(\/.*?jsx)/;
const REGEX_ROOT_DIR = /(node_modules.*)/;

if (!fs.existsSync("index.html")) {
  throw new Error("Falta el archivo index.html");
}

const run = () => {
  const rootPath = process.argv[1].replace(REGEX_ROOT_DIR, "");
  const indexHTMLPath = path.resolve(rootPath, "index.html");

  const indexHTMLRaw = fs.readFileSync(indexHTMLPath, "utf-8");
  const indexHTML = indexHTMLRaw.replace("public/", "");
  const entryPointPath = REGEX_MATCH_ROOT.exec(indexHTML)?.[0];

  const code = readFile(path.join(rootPath, entryPointPath));
  const codeTranspiled = aluraTranspiler(code);

  const codeTranspiledPath = saveFile(
    entryPointPath,
    codeTranspiled,
    path.join(rootPath, "node_modules", "alura-elements", "temp")
  );

  const newIndexHTML = indexHTML.replace(
    REGEX_MATCH_ROOT,
    path.join("assets", path.basename(codeTranspiledPath))
  );
  const newIndexHTMLPath = path.join(rootPath, "public");
  saveFile(indexHTMLPath, newIndexHTML, newIndexHTMLPath);

  swc
    .bundle({
      entry: {
        web: codeTranspiledPath,
      },
      mode: "production",
    })
    .then((res) => {
      saveFile(
        entryPointPath,
        res.web.code,
        path.join(rootPath, "public/assets")
      );
    });
};

run();

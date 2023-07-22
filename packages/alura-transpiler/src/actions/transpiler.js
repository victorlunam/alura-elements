import fs from 'fs'
const IMPORT_ALURA_ELEMENTS = "import { jsx } from 'alura-elements'\n\n"
const PREFIX_FUNCTION = 'jsx'

const transpileComponent = (node) => {
  const tagToString = /[A-Z]{1}/.test(node.tag) ? node.tag : `"${node.tag}"`
  const paramsToString = node.params.reduce((acc, curr, index) => {
    if (index === 0) {
      acc = acc.concat('{')
    }

    if (curr.type === 'string') {
      acc = acc.concat(`${curr.name}: "${curr.value}"`)
    }

    if (curr.type === 'variable' || curr.type === 'number') {
      acc = acc.concat(`${curr.name}: ${curr.value}`)
    }

    if (index !== node.children.length - 1) {
      acc = acc.concat(',')
    }

    if (index === node.params.length - 1) {
      acc = acc.concat('}')
    }

    return acc
  }, '')

  const childrenToString = node.children.reduce((acc, curr, index) => {
    if (curr.type === 'text') {
      if (!curr.value.trim()) return acc

      if (curr.value.includes('\n')) {
        acc = acc.concat('`' + curr.value + '`')
      } else {
        acc = acc.concat(`"${curr.value}"`)
      }
    }

    if (curr.type === 'variable') {
      acc = acc.concat(curr.value)
    }

    if (curr.type === 'component') {
      const stringComponent = transpileComponent(curr)
      acc = acc.concat(`${stringComponent}`)
    }

    if (index !== node.children.length - 1) {
      acc = acc.concat(',')
    }

    return acc
  }, '')

  return `${PREFIX_FUNCTION}(${tagToString}, ${paramsToString || 'null'}, ${
    childrenToString || null
  })`
}

const transpile = (ast) => {
  let transpiledCode = ''.concat(IMPORT_ALURA_ELEMENTS)

  fs.writeFileSync('temp/ast.js', JSON.stringify(ast))

  for (const node of ast) {
    if (node.type === 'text') {
      transpiledCode = transpiledCode.concat(node.value)
      continue
    }

    if (node.type === 'component') {
      const stringComponent = transpileComponent(node)
      transpiledCode = transpiledCode.concat(stringComponent)
    }
  }

  return transpiledCode
}

export default transpile

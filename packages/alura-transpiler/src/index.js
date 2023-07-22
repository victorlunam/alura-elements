import tokenize from './actions/tokenize.js'
import parse from './actions/parse.js'
import transpile from './actions/transpiler.js'
export { readFile, saveFile } from './utils/storage.js'

const aluraTranspiler = (code) => {
  const step1 = tokenize(code) // []tokens
  const step2 = parse(step1) // AST
  const step3 = transpile(step2) // transpiled code

  return step3
}

export default aluraTranspiler

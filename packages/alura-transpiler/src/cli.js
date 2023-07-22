#!/usr/bin/env node

import { readFile, saveFile } from './utils/storage.js'
import aluraTranspiler from './index.js'

const run = (filePath) => {
  const code = readFile(filePath)

  const codeTranspiled = aluraTranspiler(code)

  saveFile(filePath, codeTranspiled)
}

const filePath = process.argv[2]

if (filePath) {
  run(process.argv[2])
} else {
  console.error('Debe proporcionar la ruta del archivo JSX como parámetro.')
}

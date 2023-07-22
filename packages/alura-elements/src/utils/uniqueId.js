function* uniqueId(prefix = '') {
  let id = 0

  while (true) {
    yield `${prefix}${id++}`
  }
}

export default uniqueId

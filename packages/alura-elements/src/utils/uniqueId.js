function* uniqueId(prefix = "") {
  let _id = 0;
  while (true) {
    yield `${prefix}${id++}`
  }
}

export default uniqueId;

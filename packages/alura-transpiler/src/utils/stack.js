class Stack {
  constructor() {
    this.stack = [];
  }

  get size() {
    this.stack.length;
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.size - 1];
  }
}

export default Stack;

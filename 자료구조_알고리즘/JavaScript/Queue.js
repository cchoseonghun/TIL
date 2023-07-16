class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    const new_node = new Node(data);
    if (this.head === null || this.tail === null) {
      this.head = new_node;
      this.tail = new_node;
      return
    }
    this.tail.next = new_node;
    this.tail = new_node
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }
    const deleted_node = this.head;
    this.head = this.head.next;
    return deleted_node.data;
  }

  peek() {
    if (this.head === null) {
      return null;
    }
    return this.head.data;
  }
}

const queue = new Queue();
queue.enqueue(3);
console.log('peek:', queue.peek());       // peek: 3
queue.enqueue(4);
console.log('peek:', queue.peek());       // peek: 3
queue.enqueue(5);
console.log('peek:', queue.peek());       // peek: 3

console.log('dequeue:', queue.dequeue()); // dequeue: 3
console.log('peek:', queue.peek());       // peek: 4
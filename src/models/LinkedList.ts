import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  private head: Node | null = null;

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  protected compare(leftIdx: number, rightIdx: number): boolean {
    if (!this.head) {
      throw new Error("Empty list");
    }
    return this.at(leftIdx).data > this.at(rightIdx).data;
  }

  protected swap(leftIdx: number, rightIdx: number): void {
    const node1 = this.at(leftIdx);
    const node2 = this.at(rightIdx);

    const temp = node1.data;
    node1.data = node2.data;
    node2.data = temp;
  }

  insert(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  /**
   * Returns the node at specific index
   * @param idx number
   * @throws error error errorerer
   */
  at(idx: number): Node {
    if (!this.head || idx > this.length - 1) {
      throw new Error("Index out of bounds");
    }
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      node = node.next!;
    }
    return node;
  }

  /**
   * Prints out every node value inside of the list
   */
  print(): void {
    if (!this.head) {
      throw new Error("Empty list");
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  /**
   * @todo
   * Removes the last node
   */
  remove() {}
}

const list = new LinkedList();

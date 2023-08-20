interface Sortable {
  length: number;
  compare(leftIdx: number, rightIdx: number): boolean;
  swap(leftIdx: number, rightIdx: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  public bubble(): void {
    const { length } = this.collection;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }

  /**
   * @todo
   */
  public quick(): void {}
}

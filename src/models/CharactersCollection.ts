import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length() {
    return this.data.length;
  }

  protected compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  protected swap(leftIdx: number, rightIdx: number): void {
    const characters = this.data.split("");

    const temp = characters[leftIdx];
    characters[leftIdx] = characters[rightIdx];
    characters[rightIdx] = temp;

    this.data = characters.join("");
  }
}

export class CharactersCollection {
  constructor(public data: string) {}

  get length() {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    const characters = this.data.split("");

    const temp = characters[leftIdx];
    characters[leftIdx] = characters[rightIdx];
    characters[rightIdx] = temp;

    this.data = characters.join("");
  }
}

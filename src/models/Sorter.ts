export abstract class Sorter {
  public abstract length: number;
  protected abstract compare(leftIdx: number, rightIdx: number): boolean;
  protected abstract swap(leftIdx: number, rightIdx: number): void;

  public bubble(): void {
    const { length } = this;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  /**
   * @todo
   */
  public quick(): void {}
}

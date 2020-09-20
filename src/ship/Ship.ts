export class Ship {
  readonly MAX_STORAGE: number = 4

  constructor(
    private storage: number = 0
  ) {

  }

  unload(): void {
    this.storage--;
  }

  currentStorage(): number {
    return this.storage;
  }

  isEmpty() {
    return this.storage === 0;
  }
}
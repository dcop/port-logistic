import { Storage } from "../storage/Storage";

export class Train implements Storage {
  readonly MAX_STORAGE = 3

  constructor(
    private storage: number = 0
  ) {
  }

  isFull() {
    return this.storage === this.MAX_STORAGE
  }

  currentStorage(): number {
    return this.storage;
  }

  isEmpty(): boolean {
    return this.storage === 0;
  }

  load(): void {
    this.storage++
  }
}
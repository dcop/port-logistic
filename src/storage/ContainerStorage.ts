export class ContainerStorage<T> {
  constructor(private readonly storage: T[]) {
  }

  add(items: T[]): void {

  }

  empty(): void {}
}
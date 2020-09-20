export interface Port {
  show(): void
  receiveShip(): void
  unload(): void
  sendTrain(): void
}

export class SeaPort implements Port {
  constructor() {
  }

  receiveShip(): void {
  }

  sendTrain(): void {
  }

  show(): void {
  }

  unload(): void {
  }
}
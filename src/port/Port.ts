import { Printer } from "../console/Printer";

export interface Port {
  show(): void
  receiveShip(): void
  unload(): void
  sendTrain(): void
}

export type PortSnapshot = {
  shipStorage: number,
  trainStorage: number
  storageArea: number
}

const STORAGE_MAX_CAPACITY = 5;
const TRAIN_MAX_CAPACITY = 3;

export class SeaPort implements Port {
  constructor(
    private storageArea: number = 0,
    private train: number = 0,
    private ship: number = -1,
    private readonly printer: Printer
  ) {
  }

  receiveShip(): void {
    this.ship = 4;
  }

  sendTrain(): void {
  }

  show(): void {
    this.printer.print({
      shipStorage: this.ship,
      storageArea: this.storageArea,
      trainStorage: this.train
    })
  }

  unload(): void {
    while(this.storageArea <= STORAGE_MAX_CAPACITY || this.ship === 0) {
      this.ship--;
      this.storageArea++;
    }

    while(this.train <= TRAIN_MAX_CAPACITY) {
      this.storageArea--;
      this.train++;
    }
  }
}
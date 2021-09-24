import { Printer } from "../console/Printer";
import { Ship } from "../ship/Ship";
import { Train } from "../train_/Train";

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

export class SeaPort implements Port {
  constructor(
    private storageArea: number = 0,
    private train: Train,
    private ship: Ship | null,
    private readonly printer: Printer
  ) {
  }

  receiveShip(): void {
    this.ship = new Ship(4);
  }

  sendTrain(): void {
    this.train = new Train()
  }

  show(): void {
    this.printer.print({
      shipStorage: this.hasShip() ? this.ship!.currentStorage() : -1,
      storageArea: this.storageArea,
      trainStorage: this.train.currentStorage()
    })
  }

  unload(): void {
    const ship = this.ship!;

    while(this.storageArea < STORAGE_MAX_CAPACITY && !ship.isEmpty()) {
      ship.unload();
      this.storageArea++;
    }

    while(!this.train.isFull() && this.storageArea > 0) {
      this.storageArea--;
      this.train.load();
    }
  }

  private hasShip() {
    return this.ship !== null;
  }
}
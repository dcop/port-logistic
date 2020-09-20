import { Crane } from "../crane/Crane";
import { Train } from "../train/Train";
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

export class SeaPort implements Port {
  constructor(
    private readonly leftCrane: Crane,
    private readonly rightCrane: Crane,
    private readonly train: Train,
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
      storageArea: 0,
      trainStorage: 0
    })
  }

  unload(): void {
  }
}
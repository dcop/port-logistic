import { Crane } from "../crane/Crane";
import { Train } from "../train/Train";
import { Ship } from "../ship/Ship";
import { Printer } from "../console/Printer";

export interface Port {
  show(): void
  receiveShip(): void
  unload(): void
  sendTrain(): void
}

export class SeaPort implements Port {
  constructor(
    private readonly leftCrane: Crane,
    private readonly rightCrane: Crane,
    private readonly train: Train,
    private readonly ship: Ship,
    private readonly printer?: Printer
  ) {
  }

  receiveShip(): void {
  }

  sendTrain(): void {
  }

  show(): void {
    this.printer!.print(this)
  }

  unload(): void {
  }

  // private clone(): Port {
  //   return new SeaPort(
  //     null,
  //     null,
  //     null,
  //     null
  //   );
  // }
}
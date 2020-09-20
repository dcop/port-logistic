import { Console } from "./Console";
import { Port } from "../port/Port";

export interface Printer {
  print<T>(p: T): void
}

export class PortPrinter implements Printer {
  constructor(
    private readonly console: Console) {
  }

  print<Port>(port: Port): void {
    this.console.printLine('-^-^')
    this.console.printLine(' | |')
    this.console.printLine(' | |')
    this.console.printLine(' | |')
    this.console.printLine(' | |')
    this.console.printLine(' | |     D i')
    this.console.printLine(' A_A---::%%%')
  }

}
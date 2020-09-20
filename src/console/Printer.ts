import { Console } from "./Console";
import { Port } from "../port/Port";

export interface Printer {
  print<T>(p: T): void
}

export class PortPrinter implements Printer {
  constructor(
    private readonly console: Console,
    private readonly port: Port) {
  }

  print<Port>(port: Port): void {
    this.console.printLine('-^-^')
    this.console.printLine(' | |')
    this.console.printLine(' | |')
    this.console.printLine(' | |')
    this.console.printLine(' | |')
  }

}
import { PortSnapshot } from "../port/Port";
import { Console } from "./Console";

export interface Printer {
  print(p: PortSnapshot): void
}

export class PortPrinter implements Printer {
  constructor(
    private readonly c: Console
  ) {
  }

  print(port: PortSnapshot): void {
    let storageArea = port.storageArea;
    let shipStorage = port.shipStorage;

    let one = '-^-^';
    let two = [' |', storageArea-- == 5 ? 'X' : ' ', '|'].join('');
    let three = [shipStorage-- === 4 ? 'X|' : ' |', storageArea-- == 4 ? 'x' : ' ', '|'].join('')
    let four = [shipStorage-- === 3 ? 'X|' : ' |', storageArea-- == 3 ? 'x' : ' ', '|'].join('');
    const five = [shipStorage-- === 2 ? 'X|' : ' |', storageArea-- == 2 ? 'x' : ' ', '|'].join('');
    const six = [shipStorage-- === 1 ? 'X|' : ' |', storageArea == 1 ? 'x' : ' ', '|     D i'].join('');
    const seven = [port.shipStorage !== -1 ? 'V' : ' ', 'A_A---::%%%'].join('');

    this.c.printLine(one)
    this.c.printLine(two)
    this.c.printLine(three)
    this.c.printLine(four)
    this.c.printLine(five)
    this.c.printLine(six)
    this.c.printLine(seven)

    console.log(one)
    console.log(two)
    console.log(three)
    console.log(four)
    console.log(five)
    console.log(six)
    console.log(seven)
  }

}
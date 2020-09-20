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
    const storageArea = port.storageArea;
    const trainStorage = port.trainStorage;
    const shipStorage = port.shipStorage;

    const trainText = () => {
      const xs = new Array(3).fill('-');

      for (let i = 0; i < trainStorage; i++) {
        xs[i] = 'X'
      }

      return xs.join('').replace('-', ' ')

    }

    let one = '-^-^';
    let two = [ ' |', storageArea === 5 ? 'X' : ' ', '|' ].join('');
    let three = [ shipStorage > 3 ? 'X|' : ' |', storageArea > 3 ? 'X' : ' ', '|' ].join('')
    let four = [ shipStorage > 2 ? 'X|' : ' |', storageArea > 2 ? 'X' : ' ', '|' ].join('');
    const five = [ shipStorage > 1 ? 'X|' : ' |', storageArea > 1 ? 'X' : ' ', '|' ].join('');
    const six = [ shipStorage > 0 ? 'X|' : ' |', storageArea > 0 ? 'X' : ' ', '|', port.trainStorage > 0 ? trainText() : '   ', '  D i' ].join('');
    const seven = [ shipStorage !== -1 ? 'V' : ' ', `A_A---::%%%` ].join('');

    this.c.printLine(one)
    this.c.printLine(two)
    this.c.printLine(three)
    this.c.printLine(four)
    this.c.printLine(five)
    this.c.printLine(six)
    this.c.printLine(seven)
  }
}
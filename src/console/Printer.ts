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
    let shipStorage = port.shipStorage;

    const train = () => {
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
    const six = [ shipStorage > 0 ? 'X|' : ' |', storageArea > 0 ? 'X' : ' ', '|', port.trainStorage > 0 ? train() : '   ', '  D i' ].join('');
    const seven = [ shipStorage !== -1 ? 'V' : ' ', `A_A---::%%%` ].join('');

    this.c.printLine(one)
    this.c.printLine(two)
    this.c.printLine(three)
    this.c.printLine(four)
    this.c.printLine(five)
    this.c.printLine(six)
    this.c.printLine(seven)

    // console.log(one)
    // console.log(two)
    // console.log(three)
    // console.log(four)
    // console.log(five)
    // console.log(six)
    // console.log(seven)
  }

  private storageAreaFor(storage: number, n: number) {
    if (storage === n) {
      return storage - 1;
    }
    ;

    return storage
  }

  private isEqualTo(n1: number, n2: number) {
    return n1 === n2
  }

}
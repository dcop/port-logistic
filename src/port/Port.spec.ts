import { Times, Mock } from 'typemoq'
import { PortPrinter, Printer } from "../console/Printer";
import { Console } from "../console/Console";
import { Port, SeaPort } from "./Port";
import { Crane } from "../crane/Crane";
import { Train } from "../train/Train";
import { Ship } from "../ship/Ship";

describe('Port', () => {
  it('should show default', () => {
    const cons = Mock.ofType<Console>()
    const printer = new PortPrinter(cons.object);
    const leftCrane = Mock.ofType<Crane>()
    const rightCrane = Mock.ofType<Crane>()
    const train = Mock.ofType<Train>()
    const ship = Mock.ofType<Ship>();
    const seaPort = new SeaPort(
      leftCrane.object,
      rightCrane.object,
      train.object,
      ship.object,
      printer
    );

    seaPort.show()

    cons.verify(s => s.printLine('-^-^'), Times.once())
    cons.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    cons.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    cons.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    cons.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    cons.verify(s => s.printLine(' | |     D i'), Times.once())
    cons.verify(s => s.printLine(' A_A---::%%%'), Times.once())
  })
})
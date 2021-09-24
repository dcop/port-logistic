import { Mock, Times } from 'typemoq'
import { PortPrinter } from "../console/Printer";
import { Console } from "../console/Console";
import { Port, SeaPort } from "./Port";
import { IMock } from "typemoq/Api/IMock";
import { Ship } from "../ship/Ship";
import { Train } from "../train_/Train";

describe('Port', () => {
  let customConsole: IMock<Console>;

  beforeEach(() => {
    customConsole = Mock.ofType<Console>()
  })

  it('should show default when empty', () => {
    const printer = new PortPrinter(customConsole.object);
    const storage = 0
    const train = new Train()
    const ship = null;
    const seaPort = new SeaPort(storage, train, ship, printer);

    seaPort.show()

    customConsole.verify(s => s.printLine('-^-^'), Times.once())
    customConsole.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine(' | |     D i'), Times.once())
    customConsole.verify(s => s.printLine(' A_A---::%%%'), Times.once())
  });

  it('should receive ship', () => {
    const printer = new PortPrinter(customConsole.object);
    const storage = 0
    const train = new Train()
    const ship = new Ship();
    const seaPort = new SeaPort(storage, train, ship, printer);

    seaPort.receiveShip()
    seaPort.show()

    customConsole.verify(s => s.printLine('-^-^'), Times.once())
    customConsole.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine('X| |'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine('X| |'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine('X| |'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine('X| |     D i'), Times.once())
    customConsole.verify(s => s.printLine('VA_A---::%%%'), Times.once())
  });

  it('should unload', () => {
    const printer = new PortPrinter(customConsole.object);
    const train = new Train()
    const ship = new Ship();
    const storage = 0;
    const seaPort = new SeaPort(storage, train, ship, printer);

    seaPort.receiveShip()
    seaPort.unload();
    seaPort.show();

    customConsole.verify(s => s.printLine('-^-^'), Times.once())
    customConsole.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine(' |X|XXX  D i'), Times.once())
    customConsole.verify(s => s.printLine('VA_A---::%%%'), Times.once())
  });

  it('should receive ship and unload 2 times', () => {
    const printer = new PortPrinter(customConsole.object);
    const train = new Train()
    const ship = new Ship();
    const storage = 0;
    const seaPort = new SeaPort(storage, train, ship, printer);

    seaPort.receiveShip()
    seaPort.unload();
    seaPort.receiveShip()
    seaPort.unload();
    seaPort.show();

    customConsole.verify(s => s.printLine('-^-^'), Times.once())
    customConsole.verify(s => s.printLine(' |X|'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine(' |X|'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine(' |X|'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine(' |X|'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine(' |X|XXX  D i'), Times.once())
    customConsole.verify(s => s.printLine('VA_A---::%%%'), Times.once())
  });

  it('should receive ship and unload 3 times and then send train_', () => {
    const printer = new PortPrinter(customConsole.object);
    const train = new Train()
    const ship = new Ship();
    const storage = 0;
    const seaPort = new SeaPort(storage, train, ship, printer);

    seaPort.receiveShip()
    seaPort.unload();
    seaPort.receiveShip()
    seaPort.unload();
    seaPort.receiveShip()
    seaPort.unload();
    seaPort.sendTrain();
    seaPort.show();

    customConsole.verify(s => s.printLine('-^-^'), Times.once())
    customConsole.verify(s => s.printLine(' |X|'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine('X|X|'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine('X|X|'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine('X|X|'), Times.atLeastOnce())
    customConsole.verify(s => s.printLine('X|X|     D i'), Times.once())
    customConsole.verify(s => s.printLine('VA_A---::%%%'), Times.once())
  });
})
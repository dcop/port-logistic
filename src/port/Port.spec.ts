import { Mock, Times } from 'typemoq'
import { PortPrinter } from "../console/Printer";
import { Console } from "../console/Console";
import { Port, SeaPort } from "./Port";

describe('Port', () => {
  it('should show default when empty', () => {
    const cons = Mock.ofType<Console>()
    const printer = new PortPrinter(cons.object);
    const storage = 0
    const train = 0
    const ship = -1;
    const seaPort = new SeaPort(
      storage,
      train,
      ship,
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
  });

  it('should receive ship', () => {
    const cons = Mock.ofType<Console>()
    const printer = new PortPrinter(cons.object);
    const storage = 0
    const train = 0
    const ship = 4;
    const seaPort = new SeaPort(
      storage,
      train,
      ship,
      printer
    );

    seaPort.receiveShip()
    seaPort.show()

    cons.verify(s => s.printLine('-^-^'), Times.once())
    cons.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    cons.verify(s => s.printLine('X| |'), Times.atLeastOnce())
    cons.verify(s => s.printLine('X| |'), Times.atLeastOnce())
    cons.verify(s => s.printLine('X| |'), Times.atLeastOnce())
    cons.verify(s => s.printLine('X| |     D i'), Times.once())
    cons.verify(s => s.printLine('VA_A---::%%%'), Times.once())
  });

  it('should unload', () => {
    const cons = Mock.ofType<Console>()
    const printer = new PortPrinter(cons.object);
    const train = 0
    const ship = 0;
    const storage = 0;
    const seaPort = new SeaPort(
      storage,
      train,
      ship,
      printer
    );

    seaPort.receiveShip()
    seaPort.unload();
    seaPort.show();

    cons.verify(s => s.printLine('-^-^'), Times.once())
    cons.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    cons.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    cons.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    cons.verify(s => s.printLine(' | |'), Times.atLeastOnce())
    cons.verify(s => s.printLine(' |X|XXX  D i'), Times.once())
    cons.verify(s => s.printLine('VA_A---::%%%'), Times.once())
  });

  it('should receive ship and unload 2 times', () => {
    const cons = Mock.ofType<Console>()
    const printer = new PortPrinter(cons.object);
    const train = 0
    const ship = 0;
    const storage = 0;
    const seaPort = new SeaPort(
      storage,
      train,
      ship,
      printer
    );

    seaPort.receiveShip()
    seaPort.unload();
    seaPort.receiveShip()
    seaPort.unload();
    seaPort.show();

    cons.verify(s => s.printLine('-^-^'), Times.once())
    cons.verify(s => s.printLine(' |X|'), Times.atLeastOnce())
    cons.verify(s => s.printLine(' |X|'), Times.atLeastOnce())
    cons.verify(s => s.printLine(' |X|'), Times.atLeastOnce())
    cons.verify(s => s.printLine(' |X|'), Times.atLeastOnce())
    cons.verify(s => s.printLine(' |X|XXX  D i'), Times.once())
    cons.verify(s => s.printLine('VA_A---::%%%'), Times.once())
  });

  it('should receive ship and unload 3 times and then send train', () => {
    const cons = Mock.ofType<Console>()
    const printer = new PortPrinter(cons.object);
    const train = 0
    const ship = 0;
    const storage = 0;
    const seaPort = new SeaPort(
      storage,
      train,
      ship,
      printer
    );

    seaPort.receiveShip()
    seaPort.unload();
    seaPort.receiveShip()
    seaPort.unload();
    seaPort.receiveShip()
    seaPort.unload();
    seaPort.sendTrain();
    seaPort.show();

    cons.verify(s => s.printLine('-^-^'), Times.once())
    cons.verify(s => s.printLine(' |X|'), Times.atLeastOnce())
    cons.verify(s => s.printLine('X|X|'), Times.atLeastOnce())
    cons.verify(s => s.printLine('X|X|'), Times.atLeastOnce())
    cons.verify(s => s.printLine('X|X|'), Times.atLeastOnce())
    cons.verify(s => s.printLine('X|X|     D i'), Times.once())
    cons.verify(s => s.printLine('VA_A---::%%%'), Times.once())
  });
})
import { Times, Mock } from 'typemoq'
import { PortPrinter } from "../console/Printer";
import { Console } from "../console/Console";
import { Port } from "./Port";

describe('Port', () => {
  xit('should show default', () => {
    const p = Mock.ofType<Port>()
    const s = Mock.ofType<Console>()
    const c = new PortPrinter(s.object, p.object)

    c.print(p);

    p.verify(port => port.show(), Times.once());

    s.verify(s => s.printLine('-^-^'), Times.once())
    s.verify(s => s.printLine(' | |'), Times.once())
    s.verify(s => s.printLine(' | |'), Times.once())
    s.verify(s => s.printLine(' | |'), Times.once())
    s.verify(s => s.printLine(' | |'), Times.once())
    s.verify(s => s.printLine(' | |     D i'), Times.once())
    s.verify(s => s.printLine(' A_A---::%%%'), Times.once())
  })
})
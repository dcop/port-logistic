import { portFactory } from "./port/portFactory";
import { PortPrinter } from "./console/Printer";
import { ShellConsole } from "./console/ShellConsole";

const seaPort = portFactory(new PortPrinter(new ShellConsole()))

const useCase0 = () => {
  seaPort.show()
}


const useCase1 = () => {
  seaPort.receiveShip()
  seaPort.show()
}


const useCase2 = () => {
  seaPort.receiveShip()
  seaPort.unload()
  seaPort.show()
}


const useCase3 = () => {
  seaPort.receiveShip()
  seaPort.unload()
  seaPort.receiveShip()
  seaPort.unload()
  seaPort.show()
}


const useCase4 = () => {
  seaPort.receiveShip()
  seaPort.unload()
  seaPort.receiveShip()
  seaPort.unload()
  seaPort.receiveShip()
  seaPort.unload()
  seaPort.show()
}

const useCases = [useCase0, useCase1, useCase2, useCase3, useCase4]

useCases.forEach(useCase => {
  console.log('Start...')
  useCase();
  console.log('End...')
})



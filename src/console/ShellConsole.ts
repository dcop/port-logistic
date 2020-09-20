import { Console } from "./Console";

export class ShellConsole implements Console {
  constructor() {
  }

  printLine(...text: string[]): void {
    console.log(text)
  }
}
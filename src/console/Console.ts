export interface Console {
  printLine(...text: string[]): void
}

export class Shell implements Console {
  printLine(...text: string[]): void {
    console.log(text)
  }
}
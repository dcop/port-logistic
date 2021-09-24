import { Printer } from "../console/Printer";
import { SeaPort } from "./Port";
import { Train } from "../train_/Train";

export function portFactory(p: Printer) {
  return new SeaPort(
    5,
    new Train(),
    null,
    p
  )
}
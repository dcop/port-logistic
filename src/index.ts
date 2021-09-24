import { OneSecretAtAtime } from "./OneSecretAtAtime";

const people = new Map<string, Person>();

export function ask(person: string) {
  const aPerson = people.get(person);

  return aPerson!.ask();
}

export function talksWith(a: string, b: string) {
  let aPerson: Person;
  let anotherPerson: Person

  if (!people.has(a)) {
    aPerson = new OneSecretAtAtime(a);
  } else {
    aPerson = people.get(a)!
  }

  if (!people.has(b)) {
    anotherPerson = new OneSecretAtAtime(b);
  } else {
    anotherPerson = people.get(b)!
  }

  aPerson.talksTo(anotherPerson)

  people.set(a, aPerson)
  people.set(b, anotherPerson)
}

export function secret(p: string, s: string) {
  const aPerson = people.get(p);

  aPerson!.secret(s)
}

export function propagate() {

  people.forEach((aPerson: Person) => {
    aPerson.gossip()
  })

  console.log("people", people);
}
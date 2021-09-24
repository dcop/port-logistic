// talksWith(“Mr. Blue”,“Mr. Pink”)
// secret(“Mr. Blue”,“Gossip1")
// ask(“Mr. Blue”) == “Gossip1"
// ask(“Mr. Pink”) == “”
// propagate()
// ask(“Mr. Pink”) == “Gossip1"
// ask(“Mr. Blue”) == “”

// ---------------------------



import { ask, propagate, secret, talksWith } from "./index";

describe('Example 1', () => {
  it('should start with a secret', () => {
    talksWith("Mr. Blue","Mr. Pink");
    secret("Mr. Blue","Gossip1");

    expect(ask('Mr. Blue')).toStrictEqual('Gossip1')
    expect(ask("Mr. Pink")).toStrictEqual("")
  })

  it('should propagate the secret', () => {
    propagate()

    expect(ask("Mr. Pink")).toStrictEqual("Gossip1")
    expect(ask("Mr. Blue")).toStrictEqual("")
  })

  it('should propagate the secret to only one friend at a time', () => {
    talksWith("Mr. Blue","Mr. Brown");
    secret("Mr. Blue","Gossip2");

    propagate();

    expect(ask("Mr. Pink")).toStrictEqual("Gossip2")
    expect(ask("Mr. Brown")).toStrictEqual("")
    expect(ask("Mr. Blue")).toStrictEqual("Gossip2")
  })

  it('should propagate the secret to the other friend', () => {
    propagate();

    expect(ask("Mr. Pink")).toStrictEqual("")
    expect(ask("Mr. Brown")).toStrictEqual("Gossip2")
    expect(ask("Mr. Blue")).toStrictEqual("")
  })
})
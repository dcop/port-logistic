export class OneSecretAtAtime implements Person {
  private mySecret: string
  private friends: Map<string, Person>
  private friendsWhoAlreadyHaveTheGossip: string[]

  constructor(
    private readonly myName: string
  ) {
    this.mySecret = ""
    this.friends = new Map()
    this.friendsWhoAlreadyHaveTheGossip = [];
  }

  name() {
    return this.myName
  }

  ask() {
    return this.mySecret
  }

  talksTo(p: Person) {
    this.friends.set(p.name(), p)
  }

  secret(s: string) {
    this.mySecret = s
    this.friendsWhoAlreadyHaveTheGossip = []
  }

  gossip() {
    if (this.friends.size > 0) {
      for (const [name, person ] of this.friends.entries()) {
        if (!this.friendsWhoAlreadyHaveTheGossip.includes(name)) {
          person.secret(this.mySecret);

          this.friendsWhoAlreadyHaveTheGossip.push(name)

          break;
        }
      }

      if (this.friendsWhoAlreadyHaveTheGossip.length === this.friends.size) {
        this.mySecret = ""
      }
    }
  }
}
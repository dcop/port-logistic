interface Person {
  name(): string;
  talksTo(p: Person): void
  secret(s: string): void
  gossip(): void
  ask(): string
}
# Considerations

I got stuck at the beginning while writing first test and spent a considerable amount of time on it. 
Apart from that I managed to get all the tests from the use cases passing, so the next step was refactoring. 
Since I've started trying to keep it simple to get up and running, I've used numbers instead of objects. 
Primitive obsession kicked in, so I started implementing `Ship` and `Train`, but ran out of time eventually.
The next main things I was going to do:
* Implementing the main storage as object
* Improving code readability of the `Printer.print`

### Notes 
Head straight to `Port.spec.ts` and ignore `index.ts`, it's not working as intended (the port status never reset before running next use case),

# Running tests
Single run:
```
npm test
```
or in watch mode:
```
npm run test-watch
```
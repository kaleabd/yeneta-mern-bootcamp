// const fs = require('fs').promises;

// async function readFileAsync() {
//   try {
//     const data = await fs.readFile('file.txt', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

// readFileAsync();

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Listen for 'myEvent' event
myEmitter.on('myEvent', (data) => {
  console.log('Event received:', data);
});

// Emit the myEvent event
myEmitter.emit('myEvent', 'Hello, world!');



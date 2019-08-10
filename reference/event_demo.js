const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter {}

//Init object
const myEmitter = new MyEmitter();

//Event listner
myEmitter.on('event', () => console.log('Event Fired!'));

//console.log(MyEmitter, myEmitter);

//Init event
myEmitter.emit('event');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var bnm = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}
//myEventHandler();
var bnmEventHandler = function () {
    console.log('event happened at bnm');
  }

  function bnmsongEventHandler() {
    console.log('event song happened at bnm');
  }


//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);
bnm.on('natak', bnmEventHandler);
bnm.on('song', bnmsongEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
bnm.emit('natak');
bnm.emit('song');
bnm.emit('fun');
const EventEmitter = require('events');
const uuid = require('uuid');
//console.log(uuid.v4());

class Logger extends EventEmitter{
    log(pVal, country) {
        this.emit('message', {id: uuid.v4(), p:pVal, ctry:country});
    }
}

function messageHandler(data){
    console.log('message event handled with uuid: ' + data.id + ', ' + data.p + ', ' + data.ctry);
}

var msg = new Logger();
msg.on('message',messageHandler);
msg.log('lion', 'uk');
msg.log('dog', 'usa');
msg.log('cat', 'india');
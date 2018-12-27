
const EventEmitter = require('events');
const emitter = new EventEmitter();

/**
 * @param  {} message
 */

function log(message) {
   console.log(message);
}

//
// ─── REG ────────────────────────────────────────────────────────────────────────
//

emitter.on('messageLogged', (eventArg) => {
   console.log('Listener called', eventArg);
});

//
// ─── RASIE EVENT ────────────────────────────────────────────────────────────────
//

emitter.emit('messageLogged', {id: 1, url: 'http://log.io'});
emitter.emit('messageLogged', {id: 2, url: 'http://log2.io'});

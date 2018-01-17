const EventEmitter = require('events');
class Clock extends EventEmitter {
    constructor() {
        super();
        setInterval(()=>this.emit("tick"), 1000);
    }
}

const instance = new Clock();
instance.on("tick", () => console.log("woohoo"));
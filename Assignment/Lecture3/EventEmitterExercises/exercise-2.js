'use strict';
var EventEmitter = require('events');
class Ticker extends EventEmitter {  
    constructor(){
        super();
        this.message = "Tick";
        this.on('tick',function(){console.log(this.message);});
        this.x = this;
    }

    eventTick() {
        setInterval(()=>this.fireTick() ,1000);
        // setInterval(function(){this.x.fireTick()},1000);        
    }
    fireTick(){
        this.emit("tick");
    }
}

var ticker = new Ticker();
ticker.eventTick();
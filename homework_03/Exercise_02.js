// Exercise 
// • Build a pseudo-class named "Gym" that emits a "boom" event every 1 second. 
//• Write a script that creates an instance of "Gym" and bind to the "boom" event, 
//printing "Athlete is working out" every time it gets one. 

class gym extends event {
    name = "default";
    interval(){setInterval(() => {
        console.log("boom");
        this.emits
    }, 1000);
    }
    constructor(name){
        super();
        this.name =name;
    }
    get interval(){
        return this.interval;
    }
}

let events = require('events'):

let Text = new gym("pruebas") ;
gym.interval.bind()();
console.log("pruebas");
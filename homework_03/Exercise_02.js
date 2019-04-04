// Exercise 
// • Build a pseudo-class named "Gym" that emits a "boom" event every 1 second. 
//• Write a script that creates an instance of "Gym" and bind to the "boom" event, 
//printing "Athlete is working out" every time it gets one. 

class gym {
    constructor(){
        this.name ="pruebas";
        setInterval(() => {
            console.log("boom");
        }, 1000);
    }
}

let Text = new gym("pruebas") ;
console.log("pruebas");
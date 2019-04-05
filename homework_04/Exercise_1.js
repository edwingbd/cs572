// Exercise Write a Reactive Node program that has a function checkSystem() that checks if the system memory size is at least 4 GB 
// and the processor has more than 2 cores (use os core module).
// 1. When you call the function, you should receive an immediate message
//  on the console "Checking your system...". 
// 2. If the system doesn't have enough memory we should print a message to the console:
//   "This app needs at least 4 GB of RAM" 
// 3. If the system doesn't have at least 2 cores, print this message to the console: 
//   "Processor is not supported" 
// 4. If the system has enough specs, print the following message "System is checked successfully."
const os = require('os');
const rxjs = require('rxjs');
const {Observable} = rxjs;
//const {map,filter} =rxjs.operators;
function checkSystem(){
    console.log("Checking your system...");
        return Observable.create( function (Obser) {
            const requiredMem=8;
            const requiredCpu=8;
            let totalMem,freeMem,cpus;
            totalMem=os.totalmem()/1e9;
            freeMem=os.freemem()/1e9;
            cpus=os.cpus();
            if (totalMem<requiredMem)
                Obser.error("This app needs at least 4 GB of RAM");
            else{
                Obser.next("have enough memory");   
                if(cpus.length <requiredCpu )
                    Obser.error("Processor is not supported");
                else
                {
                    Obser.next("have enough CPUS ");
                    Obser.next("System is checked successfully.");
                }
            }
            //console.log("System is checked successfully.");
            // always give the data to the user
            Obser.next("totalMem= "+ totalMem+" freeMem="+freeMem+" cpus="+cpus.length); 
        });
}

console.log("------------------start");
checkSystem().subscribe(res=>console.log(res),err=>console.log(err)) ;
console.log("-------------------end");
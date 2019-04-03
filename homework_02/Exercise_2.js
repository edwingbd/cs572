const evenPro = async function(array_2){
    try{
        return await new Promise((resolve, reject)=>{
            const procededArray = this.filter(e=>!(e %2 ===0));
        resolve(procededArray);
    })
    }
    catch (error){
        reject("something happens error="+error);
    }
}

const oddPro = async function(){
    try{
        return new Promise((resolve, reject)=>{
        const procededArray = this.filter(e=>(e %2 ===0));
        resolve(procededArray);
    })
    }
    catch (error){
        reject("something happens error="+error);
    }
}


// String.prototype.filterwords= promiseFun;

// console.log("usin async/await");
// console.log("step1");
// "this house is nice".filterwords( ['house','nice']).then(result => console.log(result));
// console.log("step2");

Array.prototype.even=evenPro;
Array.prototype.odd=oddPro;

console.log('start');
[1,2,3,4,5,6,7,8].even().then(result => console.log(result));
[1,2,3,4,5,6,7,8].odd().then(result => console.log(result));
console.log('end')
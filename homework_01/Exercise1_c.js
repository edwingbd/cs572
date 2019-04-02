

const promiseFun = async function(array_2){
        try{
            return new Promise((resolve, reject)=>{
            const textArray = this.split(" ")
                                    .map(e=>{
                                    if(array_2.find(b=>b===e,false))
                                        return "*****";
                                    else
                                        return e;
                                    }).reduce((j,k)=>j+" "+k,"") ;

            resolve( textArray);
        })
        }
        catch (error){
            reject("something happens error="+error);
        }
    }

    String.prototype.filterwords= promiseFun;
console.log("usin async/await");
console.log("step1");
"this house is nice".filterwords( ['house','nice']).then(result => console.log(result));
console.log("step2");
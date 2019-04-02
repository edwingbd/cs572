String.prototype.filterwords= function(array_2){
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

   // console.log(textArray);
console.log("using promise");
console.log("step1");
"this house is nice".filterwords( ['house','nice']).then(result => console.log(result));
console.log("step2");
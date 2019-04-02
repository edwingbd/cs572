const { Observable, of, from } = rxjs;
const { map, filter } = rxjs.operators;
var obs = Observable.create(function (observer) {
    for (let i = 0; i < 100; i++) {
        observer.next(i);
    }
    observer.next('CS572');
    setTimeout(() => {
        observer.next('CS472');
        observer.error('Something went Wrong')
        observer.complete();
    }, 3000);
});
var subscription = obs.subscribe(
    function (x) { console.log(`Value: ${x}`); },
    function (err) { console.error(err); },
    function () { console.info(`Done`); });


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
console.log("usin Observable");
console.log("step1");
"this house is nice".filterwords( ['house','nice']).then(result => console.log(result));
console.log("step2");
{
//( function(){

    var counter = (function () {
    var privateCounter = 0;
    function changeBy(val){
        privateCounter+=val;
    }
    // in this way that generate three public functions
    return{
        increment:function(){changeBy(1);},
        decrement:function(){changeBy(-1);},
        value:function(){return privateCounter;}
    }
})();
console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
console.log(counter.value());
console.log("fin "+counter);
//})();
};// i dont understand the ide in the slide 24 lecture 1
console.log("fin 2 "+counter);
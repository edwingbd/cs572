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
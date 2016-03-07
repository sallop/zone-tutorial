// http://blog.thoughtram.io/angular/2016/01/22/understanding-zones.html

function timer(){
    return performance.now();
    //timer = performance ? performance.now : Date.now;
}

function foo(){ console.log('foo'); }
function bar(){ console.log('bar'); }
function baz(){ console.log('baz'); }
function doSomething(){
  console.log('Async task');
}

// start timer
start = timer();
foo();
setTimeout(doSomething, 2000);
bar();
baz();

// stop timer
time = timer() - start;

// log time in ms
console.log(Math.floor(time*100) / 100 + 'ms');

console.log('in the zone: ' + !!zone.inTheZone);

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
function main(){
  start = timer();
  foo();
  setTimeout(doSomething, 2000);
  bar();
  baz();
}

zone.run(main);

var myZoneSpec = {
  beforeTask: function(){
    console.log('Before task');
  },
  afterTask: function(){
    console.log('After task');
  }
};

var myZone = zone.fork(myZoneSpec);
myZone.run(main);

// stop timer
time = timer() - start;

// log time in ms
console.log(Math.floor(time*100) / 100 + 'ms');

console.log('in the zone: ' + !!zone.inTheZone);

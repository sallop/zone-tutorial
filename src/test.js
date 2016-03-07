var start, time = 0;


function timer(){
    return performance.now();
    //timer = performance ? performance.now : Date.now;
}

function foo(){ console.log('foo'); }
function bar(){ console.log('bar'); }
function baz(){ console.log('baz'); }

var myObj = {
  myAlert: alert // copying native alert to an object
};

//myObj.myAlert('this is an alert'); // is illegal
myObj.myAlert.call(window, 'this is an alert & live reloading. Really?'); // executing in context of window

// start timer
start = timer();
foo();
bar();
baz();

// stop timer
time = timer() - start;

// log time in ms
console.log(Math.floor(time*100) / 100 + 'ms');


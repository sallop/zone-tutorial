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


var profilingZone = (function(){
  var time = 0,
      timer = performance 
            ? performance.now.bind(performance)
            : Date.now.bind(Date);

  return {
    beforeTask: function(){
      this.start = timer();
    },
    afterTask: function(){
      time += timer() - this.start;
    },
    time: function(){
      return Math.floor(time*100)/100 + 'ms';
    },
    reset: function(){
      time = 0;
    }
  };
}());

zone
  .fork(profilingZone)
  .fork({
    '+afterTask': function(){
      console.log('Took: ' + zone.time());
    }
  })
  .run(main);

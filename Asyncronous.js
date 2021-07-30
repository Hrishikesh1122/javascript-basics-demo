function first(){
    setTimeout( function(){
      console.log(1);
    }, 2000 );
  }
  function second(){
    console.log(2);
  }
  first();
  second();
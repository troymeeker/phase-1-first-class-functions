const { spy } = require("chai");

function receivesAFunction(callback){
  callback();
}
function callback(){
    console.log('this is a callback function');
}


function returnsANamedFunction(printName){
 return function printName(){
     console.log('print name')
 };
};

function returnsAnAnonymousFunction(){
  return function(){
      console.log('example');
  }
};
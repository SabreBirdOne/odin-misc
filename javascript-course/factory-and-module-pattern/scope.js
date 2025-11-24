// https://wesbos.com/javascript/03-the-tricky-bits/scope#global-variables
console.log("it works!");

/* eslint-disable */
// const first = 'wes';
// let second = 'bos';
// var age = 100;

// const age = 100;

// function go() {
//   const age = 200;
// //   const hair = 'blonde';
// //   console.log(hair);
//   console.log(age);
// }

// go();
// console.log(age);
// console.log(hair);

/////////////////////////////////////////
const dog = 'snickers';

function logDog() {
    console.log(dog);
}

function go() {
  const dog = 'sunny'; 
  logDog(); //logs 'snickers'. Because logDog's closure is when it is declared above, where dog = 'snickers'.
  // Knowing that, how do you make logDog output 'sunny' instead?
}

go();

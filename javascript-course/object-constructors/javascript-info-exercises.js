// https://javascript.info/prototype-inheritance

/////////////////////////////////////////////////////////
// 1. Which values are shown in the process?

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// alert( rabbit.jumps ); // ? (1)

// delete rabbit.jumps;

// alert( rabbit.jumps ); // ? (2)

// delete animal.jumps;

// alert( rabbit.jumps ); // ? (3)

/* 
    Answer: (1) is true, from rabbit object 
    (2) is null, from animal object
    (3) is undefined, animal object no longer has jumps property.
*/

///////////////////////////////////////////////////////////
// 2. The task has two parts. Given the following objects:

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };

// let bed = {
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   money: 2000
// };

/* 
    1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: 
    pockets > bed > table > head. 
    
    For instance, pockets.pen should be 3 (found in table), 
    and bed.glasses should be 1 (found in head).
    
    2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? 
    Benchmark if needed.
*/
// Object.setPrototypeOf(pockets, bed);
// Object.setPrototypeOf(bed, table);
// Object.setPrototypeOf(table, head);

// alert(pockets.pen);
// alert(bed.glasses);

/* 

Correct Answer: 
In modern engines, performance-wise, there’s no difference whether we take a property from an object 
or its prototype. They remember where the property was found and reuse it in the next request.

For instance, for pockets.glasses they remember where they found glasses (in head), 
and next time will Ssearch right there. 

They are also smart enough to update internal caches if something changes, 
so that optimization is safe.

*/

///////////////////////////////////////////////////////////////////////////////////
/* 3 We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit?
*/

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

/* 
    The eat function is in the animal object, so "this" refers to animal?
    animal receives the full property? No. 
    
    The answer: rabbit.

    Because this is an object before the dot, so rabbit.eat() modifies rabbit.
    Property lookup and execution are two different things.
    The method rabbit.eat is first found in the prototype, then executed with the context of this=rabbit.
*/

//////////////////////////////////////////////////////////////////////////////////
/* 4. We have two hamsters: speedy and lazy inheriting from the general hamster object.

When we feed one of them, the other one is also full. Why? How can we fix it?
*/
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // was apple, now should be empty

/* 

The fix is to add property stomach: [] to speedy and lazy.
So that the eat function uses separate stomach for either speedy and lazy
instead of the stomach property of hamster.

Another solution is to modify the eat function in the hamster prototype:

eat(food) {
    // assign to this.stomach instead of this.stomach.push
    this.stomach = [food];
}

Here, this.stomach= does not perform a lookup of stomach. 
The value is written directly into this object.

As a common solution, all properties that describe the state of a particular object, 
like stomach above, should be written into that object. That prevents such problems.

*/

// https://www.javascripttutorial.net/javascript-this/
// Learn more about the this keyword in Javascript.
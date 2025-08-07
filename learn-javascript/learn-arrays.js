// https://javascript.info/array-methods#tasks

// changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
function camelize(str){
    ret = str.split('-').map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    ).join(''); 
    
    return ret;
}

// gets an array arr, looks for elements with values higher or equal to a and lower or equal 
// to b and return a result as an array.
function filterRange(arr, a, b){
    return arr.filter(item => (a <= item && item <= b));
}

// gets an array arr and removes from it all values except those that are between a and b.
function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        if (!(a <= arr[i] && arr[i] <= b)){
            arr.splice(i, 1);
            i--; //decrement i here to avoid skipping the next element.
        }
    }
}

// returns a sorted copy of arr, but keep arr unmodified.
function copySorted(arr, fn = undefined){
    // return arr.toSorted(fn); // oh come on, they didn't say I can't use toSorted!
    return arr.slice().sort();
}

// shuffles (randomly reorders) elements of the array.
function shuffle(arr){
    // Fisher-Yates shuffle: go in reverse order, swap an element with a random one before it.
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // for(let i = 0; i < arr.length; i++){
    //     let j = Math.round(Math.random() * (arr.length - 1));
    //     let item = arr[i];
    //     arr[i] = arr[j];
    //     arr[j] = item;
    // }
}

// returns an array with unique items of arr.
function unique(arr){
    // let ret = arr.toSorted();
    // for(let i = 1; i < ret.length; i++){
    //     if(ret[i] === ret[i-1]){
    //         ret.splice(i, 1);
    //         i--
    //     }
    // }

    let ret = [];

    for (let str of arr) {
        if (!ret.includes(str)) {
        ret.push(str);
        }
    }
    return ret;
}

// gets an array of objects with the age property and sorts them by age.
function sortByAge(arr){
    arr.sort((a, b) => a.age - b.age);
}

// gets an array of objects with property age and returns the average age.
function getAverageAge(arr){
    return arr.reduce((sum, person) => sum + person.age, 0) / arr.length;

}

// takes an array of users in the form {id:..., name:..., age:... } and 
// creates an object from it, with id as the key, and array items as values.
function groupById(arr){
    return arr.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
    }, {});
}

function main(){
    if (0){
        console.log(camelize("my-short-string"));
        console.log(camelize("a-list-style-image"));
        console.log(camelize("-webkit-transition"));
    }
    
    if (0){
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        alert( filtered ); // 3,1 (matching values)
        alert( arr ); // 5,3,8,1 (not modified)
    }

    if (0){
        let arr = [5, 5, 3, 8, 8, 8, 1];
        filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
        alert( arr ); // [3, 1]
    }

    if (0){
        let arr = [5, 2, 1, -10, 8];

        // ... your code to sort it in decreasing order
        arr.sort((a, b) => (+b) - (+a));

        alert( arr ); // 8, 5, 2, 1, -10
    }

    if (0) {
        let arr = ["HTML", "JavaScript", "CSS"];
        let sorted = copySorted(arr);
        alert( sorted ); // CSS, HTML, JavaScript
        alert( arr ); // HTML, JavaScript, CSS (no changes)
    }
 
    if (0){
        // counts of appearances for all possible permutations
        let count = {
        '123': 0,
        '132': 0,
        '213': 0,
        '231': 0,
        '321': 0,
        '312': 0
        };

        for (let i = 0; i < 1000000; i++) {
            let array = [1, 2, 3];
            shuffle(array);
            count[array.join('')]++;
        }

        // show counts of all possible permutations
        for (let key in count) {
            console.log(`${key}: ${count[key]}`);
        }
    }

    if (0){
        let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
        ];

        alert( unique(strings) ); // Hare, Krishna, :-O
    }

    if (0) {
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 28 };

        let users = [ john, pete, mary ];

        /* ... your code */
        let names = users.map((user) => user.name);

        alert( names ); // John, Pete, Mary
    }

    if (0) {
        let john = { name: "John", surname: "Smith", id: 1 };
        let pete = { name: "Pete", surname: "Hunt", id: 2 };
        let mary = { name: "Mary", surname: "Key", id: 3 };

        let users = [ john, pete, mary ];

        let usersMapped = users.map(user => ({
                fullName: `${user.name} ${user.surname}`, 
                id: user.id,
        }));

        /*
        usersMapped = [
        { fullName: "John Smith", id: 1 },
        { fullName: "Pete Hunt", id: 2 },
        { fullName: "Mary Key", id: 3 }
        ]
        */

        alert( usersMapped[0].id ) // 1
        alert( usersMapped[0].fullName ) // John Smith
    }

    if (0) {
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 28 };

        let arr = [ pete, john, mary ];

        sortByAge(arr);

        // now: [john, mary, pete]
        alert(arr[0].name); // John
        alert(arr[1].name); // Mary
        alert(arr[2].name); // Pete
    }

    if (0) {
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 29 };

        let arr = [ john, pete, mary ];

        alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
    }

    if (0) {
        let users = [
            {id: 'john', name: "John Smith", age: 20},
            {id: 'ann', name: "Ann Smith", age: 24},
            {id: 'pete', name: "Pete Peterson", age: 31},
        ];

        let usersById = groupById(users);
        console.table(usersById);

        /*
        // after the call we should have:

        usersById = {
        john: {id: 'john', name: "John Smith", age: 20},
        ann: {id: 'ann', name: "Ann Smith", age: 24},
        pete: {id: 'pete', name: "Pete Peterson", age: 31},
        }
        */
    }
}

main();
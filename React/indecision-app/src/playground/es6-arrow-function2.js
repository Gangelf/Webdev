// Arguments object - no longer bound with arrow functions
// const add = function(a, b) {
//     console.log(arguments);
//     return a + b;
// }

//console.log(add(55, 1));

const addArrow = (a, b) => {
    //console.log(arguments); // Can't use arguments 
    return a + b;
};

console.log(55, 2);



// this keyword - no longer bound (Below function will fail)

// const user = {
//     name: 'Alex',
//     cities: ['Isanti', 'Winona', 'Hugo'],
//     printPlacesLived: function() {

//         this.cities.forEach(function(city) {
//             console.log(this.name + ' has lives in ' + city);
//         });
//     }
// };

// Arrow Function - ES6 
const user = {
    name: 'Alex',
    cities: ['Isanti', 'Winona', 'Hugo'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lives in ' + city);
        // });
    }
}

console.log(user.printPlacesLived());


// Challenge Area

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((numbers) => numbers * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
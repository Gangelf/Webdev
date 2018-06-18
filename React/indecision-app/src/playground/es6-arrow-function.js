// ES5 Function
const square = function(x) {
    return x * x;
};

// ES6 Arrow Function
// const squareArrow = (x) => {
//     return x * x
// };


const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(8));

// const getFirstName = (fullName) => {
//     const firstName = fullName.split(' ')[0];
//     return firstName;
// };


const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Bob Andersen'));
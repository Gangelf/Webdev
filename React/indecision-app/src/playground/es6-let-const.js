var nameVar = 'Alex';
console.log('nameVar', nameVar);

let nameLet = 'Jake';
nameLet = 'Dave';
console.log('nameLet', nameLet)

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block Scoping

var fullName = 'Alex Lyzhoft';

if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
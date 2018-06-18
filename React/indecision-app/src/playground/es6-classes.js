
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        //return 'Hi. I am ' + this.name + '!'; ES5
        return `Hi. I am ${this.name}!` // ES6 Template String
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` There major is ${this.major}.`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }

    hasHome() {
        return !!this.home;
    }
    getGretting() {
        let gretting = super.getGretting();

        if (this.hasHome()) {
            gretting += ` I am visitng from ${this.home}`;
        }

        return gretting;
    }
}

const me = new Traveler('Alex Lyzhoft', 24, 'Hugo');
console.log(me);
console.log(me.hasHome());
console.log(me.getGretting());

const other = new Traveler();
console.log(other);
console.log(other.hasHome());
console.log(other.getGretting());




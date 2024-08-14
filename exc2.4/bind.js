const person = {
    name: 'Alice',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const preet = person.greet;
preet(); 

const boundGreet = preet.bind(person);
boundGreet();
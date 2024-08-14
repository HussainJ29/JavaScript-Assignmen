function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Bob' };

greet.apply(person, ['Hi', '.']);   
function createStack (){
    let items = []

    return{
        push(value){
            items.push(value);
        },                          //{Closure (push and pop methods for the array) is helping to stay connected with the items array which is only private for the function createStack()  }
        pop (){
            items.pop();
        },

        inspect() {
            return [...items]; // Returns a copy of the items array
        }
    }
}

let stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.inspect());
stack.pop()
stack.pop()
console.log(stack.inspect());


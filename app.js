// memoized Function from Scratch

const memoizedAdd = () => {
    let cache ={}
    return (n , m) =>{
        if (n+m in cache){
            console.log("Fetching the Value from the cache")
            return cache[n+m];
        }else{
            console.log("Calculating the value");
            let result  = n + m;
            cache[n+m] = result;
            return result;
        }
    }
}

const newAdd = memoizedAdd();

const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the second number: "));

console.log(newAdd(num1, num2)); // Calculates or fetches from cache
console.log(newAdd(num1, num2)); // Fetches from cache
console.log(newAdd(num1, num2));
console.log(newAdd(num1, num2));
console.log(newAdd(num1, num2));
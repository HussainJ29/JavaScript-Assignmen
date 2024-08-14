function getNumber(delay){
    return new Promise((resolve , reject)=>{
        const randomNumber = Math.floor(Math.random()*100) +1;

        setTimeout(()=>{
            if (randomNumber % 5 === 0){
                reject(`error the random number ${randomNumber} is divisible by 5`);
            }else{
                resolve(`the random number ${randomNumber} is not divisible by 5`);
            }
        }, delay);
    })
}
getNumber(2000)

    .then(result => console.log(result))
    .catch(err => console.log(err));

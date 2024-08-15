class customPromise {
    constructor(initializer) {
        this.state = 'pending'; //initializing state of the promise
        this.result = null;
        this.handlers = [];


        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = "fullfilled";
                this.result = value;
                this.handlers.forEach((handler) => {
                    if (handler.onFullfilled) {
                        handler.onFullfilled(value);
                    }
                })
            }
        }
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = "rejected";
                this.result = reason;
                this.handlers.forEach((handler) => {
                    if (handler.onRejected) {
                        handler.onRejected(reason);
                    }
                })
            }
        };


        try {
            initializer(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    //writing for then method to give response for the promise if that is in resolve or reject state

    then(onFullfilled,onRejected){
        if (this.state === "fulfilled") {
            setTimeout(() => {
              try {
                resolve(onFullfilled(this.result));
              } catch (error) {
                reject(error);
              }
            }, 0);
          } else if (this.state === "rejected") {
            setTimeout(() => {
              try {
                reject(onRejected(this.result));
              } catch (error) {
                reject(error);
              }
            }, 0)
        }else{
            this.handlers.push({onFullfilled,onRejected});
        }
    }
}

const promise = new customPromise((resolve, reject) => {
    const shouldReject = true; // Change this to true to trigger the reject state
  
    setTimeout(() => {
      if (shouldReject) {
        reject("Oops! Something went wrong."); 
      } else {
        resolve("Hello, Hussain here");
      }
    }, 500);
  });
  
  promise.then(
    (result) => console.log("Fulfilled:", result), 
    (error) => console.log("Rejected:", error) 
  );
  
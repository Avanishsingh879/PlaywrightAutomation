//A promise in JavaScript is an object that is used to represent the eventual completion or failure of an asynchronous operation.
//Promise in JavaScript, users can handle asynchronous operations
//States of Promise
//Pending: It is the initial phase, which represents that the asynchronous operations are still in progress.
//Fulfilled: It indicates that the asynchronous operation has been completed successfully.
//Rejected: It indicates that the operation has failed.

import { error } from "console";

//const mypromise=Promise.resolve("Hello Java");
//mypromise.then(message=>{


    //console.log(message);
//});

Promise.all([Promise.resolve("Test 1 Completed"),
Promise.reject(" Task2 is failed")

])

.then((results)=>console.log(results))
.catch((error)=>console.log(error));
const promise=new Promise(function(resolve,reject){

       const a="Test";
       const b="test";

       if(a===b){

        resolve();
       }

       else{

        reject();
       }


})

promise.then(function(){

    console.log("Promise Sucessfully");
})

.catch(function(){

    console.log("Promise rejeced");
});
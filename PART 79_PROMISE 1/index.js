

const promise1 = new Promise ((resolve, reject)=>{

    let completedPromise = true;
    if(completedPromise){
        resolve("completed promise 1");
    }else{
        reject(new Error("not completed promise 1"));
    }

});

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
    resolve("completed promise 2")
},3000)})

promise1.then(res =>{
    console.log(res);
})
.catch(err =>{
    console.log(err)
});

setTimeout(()=>{
    resolve("completed promise 1")
},2000)
promise2.then((res) => console.log(res));

Promise.all([promise1,promise2]).then(([res1,res2]) => console.log(res1))
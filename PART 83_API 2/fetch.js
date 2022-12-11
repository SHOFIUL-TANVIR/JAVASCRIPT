

console.clear();
/*
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:'POST',
    
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    
    body: JSON.stringify({
        title:"foo",
        body: "bar",
        userId:1,
    }),
})
.then((res) => res.json())
.then((res) => console.log(res))
.catch((err) => console.log(err));*/

const makeRequest = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}

const getData = () =>{
    makeRequest ()
    .then((res) => console.log(res));

};
getData();
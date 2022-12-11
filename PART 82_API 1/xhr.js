

console.clear();
/*
const makeRequest = (method,url,data) =>{
    
    const xhr  = new XMLHttpRequest();
    xhr.open(method,url);

    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload =() =>{
        let data = xhr.response;
        console.log(JSON.parse(data));

    };

    xhr.onerror = () =>{
        console.log("error is here")
    }
    xhr.send(JSON.stringify(data));
}*/

const makeRequest = (method,url,data) =>{
    
    return new Promise((resolve,reject) =>{
    const xhr  = new XMLHttpRequest();
    xhr.open(method,url);

    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload =() =>{
        let data = xhr.response;
        console.log(JSON.parse(data));

    };

    xhr.onerror = () =>{
        console.log("error is here")
    }
    xhr.send(JSON.stringify(data));
});
 };
    const getData = () =>{
        makeRequest ("GET", "https://jsonplaceholder.typicode.com/posts")
        .then((res) => console.log(res));
    }


/*

const getData = () =>{
    makeRequest ("GET", "https://jsonplaceholder.typicode.com/posts/1",{
    title: 'foo',
    body: 'bar',
    userId: 1,
    });
  
}
const deleteData = () =>{
    makeRequest ("DELETE", "https://jsonplaceholder.typicode.com/posts/1",{
        id: 1,
        title: 'change',
        body: 'bar',
        userId: 1,
    });
}
deleteData();*/
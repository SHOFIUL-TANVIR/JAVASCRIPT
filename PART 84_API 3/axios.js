

console.clear();

const makeRequest = async (config) => {

  return await axios(config)

}

const deleteData = () =>{
  makeRequest({
    url : "https://jsonplaceholder.typicode.com/posts",
    method: "delete",
   
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

};

deleteData();



/*const updateData = () =>{
  makeRequest({
    url : "https://jsonplaceholder.typicode.com/posts",
    method: "Put",
    body: JSON.stringify({
      id: 1,
      title: 'foonn',
      body: 'barcdd',
      userId: 1,
   
  }),
})
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

}

updateData();



/*const createData = () =>{
  makeRequest({
    url : "https://jsonplaceholder.typicode.com/posts",
    method: "Post",
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
   
  }),
})
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

}

createData();*/


/*const getData = () =>{
  makeRequest("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

}

getData();*/


/*axios.delete("https://jsonplaceholder.typicode.com/posts/1")
.then((res) => console.log(res.data))
.catch((err) => console.log(err));*/
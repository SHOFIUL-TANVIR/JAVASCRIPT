

console.clear();

const makeRequest = async(url,method) =>{

   try{
    const result = await $.ajax({
        url: url,
        method: method,
        
    });
    return result;
   }catch (err){
    console.log(err);
   }
};

const deleteData = () =>{
    makeRequest ("https://jsonplaceholder.typicode.com/posts/1", "DELETE")
      
    .then((res) => console.log(res));

};
deleteData();

/*const createData = () =>{
    makeRequest ("https://jsonplaceholder.typicode.com/posts/1", "PUT",{
        id:1,
        title: 'foolm',
        body: 'baruiu',
        userId: 1,
      })
    .then((res) => console.log(res));
};

createData();*/

/*const getData = () =>{
    makeRequest ("https://jsonplaceholder.typicode.com/posts/1", "GET")
    .then((res) => console.log(res));
};

getData();*/
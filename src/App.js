import React,{useState} from "react"

import axios from "axios"

function App() {

  const URL="https://jsonplaceholder.typicode.com/todos"


  const [create,setCreate]=useState([])
  const [read,setRead]=useState([])
  const [update,setUpdate]=useState([])
  const [del,setDel]=useState([])


  function createAPI(){
    axios.post(URL,{
      title:"API has been created"
    }).then((response)=>{
      console.log(response.data)
      setCreate(response.data);
    })

  }

  function readAPI(){
    axios.get(`${URL}/1`).then((response)=>{
      console.log(response.data)
      setDel(response.data)
      setUpdate(response.data)
      setRead(response.data);
    })
  }

  function updateAPI(){
    axios.put(`${URL}/1`,{
      title:"The API has been updated"
    }).then((response)=>{
      setUpdate(response.data)
    })
  }

  function delAPI(){
    axios.delete(`${URL}/1`).then((response)=>{
      setDel([])
    })
  }
  return (

   <div>
   <h1>Create and API</h1>
   <p>{create.title}</p>
   <button onClick={createAPI}>Create</button>

   <h1>Read an API</h1>
    <p>{read.title}</p>
    <button onClick={readAPI}>Read</button>

    <h1>Update an API</h1>
    <p>{update.title}</p> 
    <button onClick={updateAPI}>Update</button> 


    <h1>Delete an API</h1>
    <p>{del.title}</p>
    <button onClick={delAPI}>Delete</button>


  </div>
  );
}

export default App;

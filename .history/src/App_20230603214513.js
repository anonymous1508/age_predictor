
import './App.css';
import { useEffect,useState } from 'react';
import Axios from "axios";

function App() {
  const fetchdata= ()=>{
    const [name,setName]=useState("");
    Axios.get(`https://api.agify.io?name=${name}`)
  }
  return (
    <div className="App">
    <input placeholder='Your name..' onChange={(event)=>{
      setName(event.target.value);
    }}></input>
      <button className='' onClick={fetchdata}>
        Predict Age
      </button>
      <h1>
        Predicted Age:
      </h1>
    </div>
  );
}

export default App;

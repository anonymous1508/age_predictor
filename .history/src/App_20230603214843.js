
import './App.css';
import { useEffect,useState } from 'react';
import Axios from "axios";

function App() {
  const Fetchdata= ()=>{
    const [name,setname]=useState("");
    Axios.get(`https://api.agify.io?name=${name}`).then((res)=>{
      console.log(res.data);
    });
  }
  return (
    <div className="App">
    <input placeholder='Your name..' onChange={(event)=>{
      setname(event.target.value);
    }}></input>
      <button className='' onClick={Fetchdata}>
        Predict Age
      </button>
      <h1>
        Predicted Age:
      </h1>
    </div>
  );
}

export default App;

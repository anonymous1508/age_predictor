
import './App.css';
import { useEffect,useState } from 'react';
import Axios from "axios";

function App() {
  const [name,setname]=useState("");
  const[predictedage,setpredictedage]=useState("")
  const Fetchdata= ()=>{

   
    Axios.get(`https://api.agify.io?name=${name}`).then((res)=>{
      setpredictedage(res.data.age);
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
        Predicted Age: {predictedage}
      </h1>
    </div>
  );
}

export default App;

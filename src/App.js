import { useEffect, useState } from "react";
import './App.css';

export default function App() {

  //const navigate = useNavigate();
  const [input, handleText] = useState("");

  function handleFile() {

  }
  function submit() {

  }
  return (
    <div className="App">
      <div className="input">
        <p>
          Text Input: 
        </p>
        <input type="text" id="input-box" value={input} placeholder="Enter text" onChange={(text) => handleText(text.target.value)}/>
      </div>
      <div className="input">
        <p>
          File Input: 
        </p>
        <button className="button" onclick={() => handleFile()}>Choose File</button>
      </div>
        <button className="button" onclick={() => submit()}>Submit</button>
    </div>
  );
}

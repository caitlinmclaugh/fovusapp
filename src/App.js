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
        <label>Text Input: </label>
        <input type="text" id="input-box" value={input} onChange={(text) => handleText(text.target.value)}/>
      </div>
      <div className="input">
        <label>File Input: </label>
        <button className="btn" onclick={() => handleFile()}>Choose File</button>
        <span class="infotext"> No file chosen</span>
      </div>
        <button className="btn" onclick={() => submit()}>Submit</button>
    </div>
  );
}

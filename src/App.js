
import './App.css';

export default function App() {

  const navigate = useNavigate();

  function handleText(inpuut) {

  }
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
        <input type="text" id="input-box" value={input} placeholder="Enter text" onChange={(text) => setUsername(text.target.value)}/>
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

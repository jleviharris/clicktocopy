import "./App.css";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("25%OFF");
  const [status, setStatus] = useState("Copy");

  const textChange = (e) => {
    setText(e.target.value);
    setStatus("Copy");
  };

  return (
    <div className="App">
      <h1>Get 25% with this coupon</h1>
      <form>
        {" "}
        <input type="text" value={text} onChange={(e) => textChange(e)}></input>
        <button
          className="bttn"
          onClick={(e) => {
            navigator.clipboard.writeText(text);
            e.preventDefault();
            setStatus("Copied");
          }}
        >
          {status}
        </button>
      </form>
    </div>
  );
}

export default App;

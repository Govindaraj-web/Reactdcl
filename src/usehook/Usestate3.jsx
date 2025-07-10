import { useState } from "react";
import "./styles.css";

function Usestate3() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="contai">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input-box"
          placeholder="Type something..."
        />
        <p className="text-display">You typed: {text}</p>
      </div>
      <div className='amazgr'>
        <img src="../assets/usestat3.png" alt="usestate_method" />
      </div>
    </>
  )
}

export default Usestate3
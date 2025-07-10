import { useState } from "react";
import "./styles.css";

function Usestate4() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
    <div className="contai">
      <button onClick={() => setIsOn(!isOn)} className={`buttonn ${isOn ? "on" : "off"}`}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>

     <div className='amazgr'>
                <img src="../assets/usestat4.png" alt="usestate_method" />
            </div>
            </>
  )
}

export default Usestate4
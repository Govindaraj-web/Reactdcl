import { useState } from "react";
import "./styles.css";

function Usestate2() {
    const [isVisible, setIsVisible] = useState(true);
  return (
    <>
    <div className="contai">
      <button onClick={() => setIsVisible(!isVisible)} className="buttonn">
        Toggle
      </button>
      {isVisible && <p className="text-display">Hello, I am visible!</p>}
    
    </div>
    <div className='amazgr'>
        <img src="../assets/usestat2.png" alt="usestate_method" />
      </div>
    </>
  )
}

export default Usestate2
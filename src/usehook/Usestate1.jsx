import { useState } from "react";
import "./styles.css";

function Usestate1() {
    const [count, setCount] = useState(0);

  return (
    <>
   <div className="contai">
      <h2 className="count-text">Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="buttonn">Increment </button>
      <button onClick={()=>setCount(count-1)} className="buttonn">Decrement</button>
    </div>
    <div className='amazgr'>
        <img src="../assets/usestat1.png" alt="usestate_method" />
      </div>
    </>
  )
}

export default Usestate1
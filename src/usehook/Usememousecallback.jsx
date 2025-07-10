import React,{useMemo,useCallback,useState} from 'react'

function Usememousecallback() {
    const [count, setCount] = useState(0);
    const [dark,setDark] = useState(false)

  // useMemo saves the value
  const double = useMemo(() => {
    console.log('Calculating double');
    return count * 2;
  }, [count]);

  // useCallback saves the function
  const handleClick = useCallback(() => {
    alert('You clicked me!');
  }, []);

  const toggleTheme = useMemo(()=> {
    return{
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
       }
  },[dark])

  return (
    <div>
        <h2>Count: {count}</h2>
        <h3 >Double: {double}</h3>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={handleClick}>Click Me</button>
      
      <button onClick={()=>setDark((curr) => !curr)}>Toggle theme</button>
      <h1 style={toggleTheme}  > Theme color</h1>
       <div className='routerr'>
                <img src="../assets/usememo1.png" alt="usememo" />
            </div>
    </div>
  )
}

export default Usememousecallback



// import React, { useState, useMemo, useCallback } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState(1);

//   // useMemo: Expensive calculation
//   const expensiveResult = useMemo(() => {
//     console.log("Calculating expensive value...");
//     let result = 0;
//     for (let i = 0; i < 100000000; i++) {
//       result += input;
//     }
//     return result;
//   }, [input]);

//   // useCallback: Save function
//   const showMessage = useCallback(() => {
//     alert("Button clicked, Thalaiva!");
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>React useMemo & useCallback Practice</h2>

//       <div>
//         <label>Enter a number: </label>
//         <input
//           type="number"
//           value={input}
//           onChange={(e) => setInput(Number(e.target.value))}
//         />
//       </div>

//       <h3>Expensive Result: {expensiveResult}</h3>

//       <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
//       <br /><br />
//       <button onClick={showMessage}>Show Message</button>
//     </div>
//   );
// }

// export default App;

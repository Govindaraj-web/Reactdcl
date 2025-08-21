import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, okaidia, atomDark, tomorrow,solarizedlight,coldarkDark,duotoneDark} from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeList() {
  // Array of code snippets with themes
  const snippets = [
    {color: 'dracula', code: `console.log("Hello from Snippet 1");`, theme: dracula },
    { code: `function sum(a, b) { return a + b; }`, theme: okaidia },
    { code: `const greet = name => \`Hi, \${name}!\`;`, theme: atomDark },
    { code: `let x = 10; let y = 20; console.log(x + y);`, theme: tomorrow },
    { code: `const arr = [1, 2, 3]; arr.forEach(num => console.log(num));`, theme: solarizedlight },
    { code: `const obj = { name: "Arjun" }; console.log(obj.name);`, theme: coldarkDark },
    { code: `if(true){ console.log("Condition met"); }`, theme: duotoneDark },
    { code: `for(let i=0;i<5;i++){ console.log(i); }`, theme: tomorrow },
    { code: `setTimeout(() => console.log("Done"), 1000);`, theme: dracula },
    { code: `fetch("/api").then(res => res.json()).then(console.log);`, theme: okaidia },
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const boxStyle = {
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    marginBottom: "20px",
  };

  const btnStyle = (isCopied) => ({
    position: "absolute",
    top: "10px",
    right: "10px",
    background: isCopied ? "green" : "#444",
    color: "white",
    border: "none",
    padding: "5px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.85rem",
    zIndex: 1,
  });

  return (
    <div>
      {snippets.map((item, index) => (
        <div key={index} style={boxStyle}>
          <h1>{item.color}</h1>
          <button
            onClick={() => handleCopy(item.code, index)}
            style={btnStyle(copiedIndex === index)}
          >
            {copiedIndex === index ? "Copied!" : "Copy"}
          </button>
          <SyntaxHighlighter
            language="javascript"
            style={item.theme}
            customStyle={{ margin: 0, padding: "20px", fontSize: "0.9rem" }}
          >
            {item.code}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
}

export default CodeList;

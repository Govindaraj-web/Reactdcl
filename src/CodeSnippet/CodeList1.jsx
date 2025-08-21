import React from "react"; 
import CodeBlock from "./CodeBlock";
import {a11yDark, dracula, okaidia, atomDark, tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeList() {
  // First set of code snippets
  const snippets1 = [
    { code: `console.log("Hello from Snippet 1");`, theme: a11yDark },
    { code: `function sum(a, b) { return a + b; }`, theme: okaidia },
  ];

  // Second set of code snippets
  const snippets2 = [
    { code: `const greet = name => \`Hi, \${name}!\`;`, theme: atomDark },
    { code: `let x = 10; let y = 20; console.log(x + y);`, theme: tomorrow },
  ];

  return (
    <div>
      <h1>Hi this codelist1</h1>
      {snippets1.map((item, index) => (
        <CodeBlock
          key={index}
          code={item.code}
          theme={item.theme}
        />
      ))}

      <h1>Hi this codelist2</h1>
      {snippets2.map((item, index) => (
        <CodeBlock
          key={index}
          code={item.code}
          theme={item.theme}
        />
      ))}
    </div>
  );
}

export default CodeList;

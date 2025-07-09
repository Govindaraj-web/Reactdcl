// import React, { useRef,useState } from 'react'

// function Useref() {
//       const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus(); // focuses the input box
//   };

//  const countRef = useRef(0);
//   const [render, setRender] = useState(false);

//   const increment = () => {
//     countRef.current += 1;
//     console.log('Count:', countRef.current);
//   };

//   return (
    // <div>
    //   <input ref={inputRef} type="text" placeholder="Enter name" />
    //   <button onClick={handleClick}>Focus Input</button>
    // </div>

//     <div>
//       <h1>Render Count: {render.toString()}</h1>
//       <button onClick={increment}>Increase Without Re-render</button>
//       <button onClick={() => setRender(!render)}>Force Re-render</button>
//     </div>
//   )
// }

// export default Useref


// import React, { useRef, useEffect } from 'react';

// function LoginForm() {
//   const usernameRef = useRef(null); // 📦 input box
//   const passwordRef = useRef(null); // 📦 password box

//   useEffect(() => {
//     usernameRef.current.focus(); // Auto-focus on load
//   }, []);

//   const handleLogin = () => {
//     const username = usernameRef.current.value;
//     const password = passwordRef.current.value;

//     alert(`Username: ${username}\nPassword: ${password}`);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Login Form</h2>
//       <input
//         ref={usernameRef}
//         type="text"
//         placeholder="Enter username"
//         style={{ marginBottom: '10px', display: 'block' }}
//       />
//       <input
//         ref={passwordRef}
//         type="password"
//         placeholder="Enter password"
//         style={{ marginBottom: '10px', display: 'block' }}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default LoginForm;


import React, { useRef } from 'react';

function ScrollExample() {
  const aboutRef = useRef(null); // 📦 reference for "About" section
  const contactRef = useRef(null); // 📦 reference for "Contact" section

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' }); // 👇 scrolls smoothly
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <h1>Welcome Thalaiva 🙏</h1>
      <button onClick={scrollToAbout}>Go to About</button>
      <button onClick={scrollToContact}>Go to Contact</button>

      {/* Some space to make scrolling visible */}
      <div style={{ height: '600px' }}></div>

      <div
        ref={aboutRef}
        style={{ height: '200px', backgroundColor: '#ffc107', padding: '20px' }}
      >
        <h2>About Section</h2>
        <p>This is the About section you scrolled to using useRef.</p>
      </div>

      <div style={{ height: '600px' }}></div>

      <div
        ref={contactRef}
        style={{ height: '200px', backgroundColor: '#17a2b8', padding: '20px' }}
      >
        <h2>Contact Section</h2>
        <p>This is the Contact section you scrolled to using useRef.</p>
      </div>
    </div>
  );
}

export default ScrollExample;



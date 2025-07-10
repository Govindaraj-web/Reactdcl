import React, { useState } from 'react';

function Bgcolorchange() {
  const [bgColor, setBgColor] = useState('#fff');
 
   const changeColor = () => {
     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A8'];
     const randomColor = colors[Math.floor(Math.random() * colors.length)];
     setBgColor(randomColor);
   };
 
   return (
     <div style={{ backgroundColor: bgColor, height: '100vh', paddingTop: '50px' }}>
       <h1>Welcome to My Page</h1>
       <button onClick={changeColor}>
         Change Background Color
       </button>
     </div>
   );
}

export default Bgcolorchange
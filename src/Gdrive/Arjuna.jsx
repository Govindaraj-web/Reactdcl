import React from 'react'

function Arjuna() {
  
      
// const imageUrl = "https://drive.google.com/uc?export=view&id=1XmEP2QlzoU0MH2KKm49wHGQ5fw1olVcg";

  return (
    <>
     <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Drive Image Preview</h2>
           <iframe
        src="https://drive.google.com/file/d/1XmEP2QlzoU0MH2KKm49wHGQ5fw1olVcg/preview"
        width="640"
        height="480"
        allow="autoplay"
        style={{ border: 'none', borderRadius: '12px' }}
        title="Drive Image Preview"
      ></iframe>
    </div>
     <div className='amazgr'>
                <img src="../assets/gdrive1.png" alt="G-Drive import image" />
            </div>
            </>
  )
}

export default Arjuna

// https://drive.google.com/file/d/1XmEP2QlzoU0MH2KKm49wHGQ5fw1olVcg/view?usp=drive_link



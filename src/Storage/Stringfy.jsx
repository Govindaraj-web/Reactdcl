import React, { useState } from 'react'

function Stringfy() {
    const [user] = useState({
        name: 'Arjun',
        age: 25,
        city: 'Bengaluru',
        skills: ['React', 'JavaScript', 'HTML']
    });

    const [result, setResult] = useState('');

    const handleStringify = () => {
        const str = JSON.stringify(user, null, 2); // pretty print with spacing
        setResult(str);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>React JSON.stringify() Example</h2>
            <button onClick={handleStringify}>Stringify Object</button>

            <pre style={{ backgroundColor: '#f0f0f0', padding: '10px', marginTop: '20px' }}>
                {result}
            </pre>
        </div>
    )
}

export default Stringfy
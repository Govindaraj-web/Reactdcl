import React,{useEffect,useState} from 'react'

function LocalStores() {
    const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Load data from localStorage on first load
  useEffect(() => {
    const saved = localStorage.getItem('customerList');
    if (saved) {
      setCustomers(JSON.parse(saved));
    }
  }, []);

  // Save customers to localStorage when list changes
  useEffect(() => {
    localStorage.setItem('customerList', JSON.stringify(customers));
  }, [customers]);

  const addCustomer = () => {
    if (!name || !email || !phone) {
      alert('Please fill all fields');
      return;
    }

    const newCustomer = { name, email, phone };
    setCustomers([...customers, newCustomer]);

    // Clear input
    setName('');
    setEmail('');
    setPhone('');
  };

  const deleteCustomer = (index) => {
    const updatedList = [...customers];
    updatedList.splice(index, 1);
    setCustomers(updatedList);
  };
  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 Customer Details Table</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={addCustomer}>Add Customer</button>

      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }} border="1">
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No customers found</td>
            </tr>
          ) : (
            customers.map((cust, index) => (
              <tr key={index}>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td>{cust.phone}</td>
                <td>
                  <button
                    onClick={() => deleteCustomer(index)}
                    style={{ color: 'red' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default LocalStores
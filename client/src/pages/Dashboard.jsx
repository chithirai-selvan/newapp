import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      navigate('/login'); // redirect if not logged in
    } else {
      setUser(JSON.parse(savedUser));
    }
  }, [navigate]);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      {user && (
        <>
          <h1>Welcome, {user.name} 👋</h1>
          <p>Explore your dashboard</p>
          <div style={{ marginTop: '30px' }}>
            <a href="/products">🛒 View Products</a> | 
            <a href="/cart" style={{ margin: '0 20px' }}>🧺 Cart</a> | 
            <a href="/profile">👤 Profile</a>
          </div>
        </>
      )}
    </div>
    
  );
}

export default Dashboard;

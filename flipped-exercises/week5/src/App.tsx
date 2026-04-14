import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';

export default function App() {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault(); 
    setError('');
    
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) throw new Error("Wrong credentials!");

      const data = await response.json();
      
      localStorage.setItem('my_real_token', data.accessToken);
      setToken(data.accessToken);
      setIsLoggedIn(true);

    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('my_real_token');
    setIsLoggedIn(false);
    setToken('');
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <div>
          <h2>You are logged in!</h2>

          <div style={{ wordBreak: 'break-all', marginBottom: '10px' }}>
            <strong>Your token:</strong><br/>
            {token}
          </div>

          <button onClick={handleLogout}>Logout</button>

          <hr style={{ margin: '20px 0' }} />

          <h3>Protected Area</h3>
          <FeedbackForm />
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>JWT Login Test</h2>

          <input 
            type="text" 
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">Log In (POST)</button>
        </form>
      )}
    </div>
  );
}

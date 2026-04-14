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
          <div className="topbar">
            <span>✅ Logged In</span>
            <div className="token-box">{token}</div>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>

          <h3>Give Feedback</h3>
          <FeedbackForm />
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <p>Log in to access the feedback form.</p>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
}

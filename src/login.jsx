import React from 'react';
import { auth, provider, signInWithPopup } from './firebase';  // Import Firebase methods
import './Login.css';

const Login = ({ setUser }) => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Set user in state
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign in with Google</h2>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;

'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedLoginBar from '@/components/my-components/AnimasiAkun'; // Import the animated bar component

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { username, password });
    alert('Fitur login belum terhubung ke backend.');
  };

  return (
    <div className="login-container">
      <AnimatedLoginBar />
      
      <div className="hero-img">
        <Image src="/images/logo2.png" alt="Logo Vioner Tailor" className="logo" width={180} height={180} />
      </div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">👤 Username</label>
        <input 
          type="text" 
          id="username" 
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        
        <label htmlFor="password">🔒 Password</label>
        <input 
          type="password" 
          id="password" 
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
       <p>Belum punya akun?<br/>
       <a href="/register">Daftar di sini</a></p>
      </form>
    </div>
  );
}
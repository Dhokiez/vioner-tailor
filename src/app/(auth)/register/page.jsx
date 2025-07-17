'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedLoginBar from '@/components/my-components/AnimasiAkun'; // Import the animated bar component

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nama, setNama] = useState(''); // Added state for "namalengkap"

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }
   console.log('Registering with:', { nama, username, email, password });
    // TODO: Add actual register logic here
    alert('Fitur register belum terhubung ke backend.');
  };

  return (
    <div className="register-container">
      <AnimatedLoginBar />

      <div className="hero-img">
        <Image src="/images/logo2.png" alt="Logo Vioner Tailor" className="logo" width={180} height={180} />
      </div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="nama">👤 Nama</label>
        <input 
          type="text" 
          id="nama" 
          name="nama" 
          value={nama}
          onChange={(e) => setNama(e.target.value)} 
          required 
        />

        <label htmlFor="username">👤 Username</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
        />
        
        <label htmlFor="email">📧 Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        
        <label htmlFor="confirm-password">🔒 Confirm Password</label>
        <input 
          type="password" 
          id="confirm-password" 
          name="confirm-password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required 
        />
        <button type="submit">Register</button>
        <p>Sudah punya akun?<br/>
        <a href="/login">Masuk di sini</a></p>
      </form>
    </div>
  );
}

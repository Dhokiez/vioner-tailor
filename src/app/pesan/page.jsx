'use client'; // <-- Penanda 'use client' pindah ke sini

import { useState } from 'react';
import Link from 'next/link';


export default function PesanForm() {
  // Semua state dan fungsi form ada di sini
  const [nama, setNama] = useState('');
  const [layanan, setLayanan] = useState('jahit_baru');
  const [deskripsi, setDeskripsi] = useState('');
  const [kontak, setKontak] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const pesanan = { nama, layanan, deskripsi, kontak };
    console.log('Pesanan Dikirim:', pesanan);
    alert(`Terima kasih, ${nama}! Pesanan Anda telah kami catat.`);
  };

  

  // JSX untuk form dan sekitarnya juga pindah ke sini
  return (
    <section className="pesan">
      <h2>Form Pemesanan</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nama">Nama:</label>
        <input 
          type="text" 
          id="nama" 
          name="nama" 
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required 
        />
        
        <label htmlFor="layanan">Jenis Layanan:</label>
        <select 
          id="layanan" 
          name="layanan"
          value={layanan}
          onChange={(e) => setLayanan(e.target.value)}
        >
          <option value="jahit_baru">Jahit Pakaian Baru</option>
          <option value="permak">Permak Pakaian</option>
          <option value="seragam">Jahit Seragam</option>
          <option value="kostum">Jahit Kostum</option>
          <option value="jas">Jahit Setelan Jas</option>
          <option value="gaun">Jahit Gaun</option>
        </select>
        
        <label htmlFor="deskripsi">Deskripsi Pesanan:</label>
        <textarea 
          id="deskripsi" 
          name="deskripsi" 
          rows="4"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
        ></textarea>
        
        <label htmlFor="kontak">Nomor WhatsApp:</label>
        <input 
          type="text" 
          id="kontak" 
          name="kontak" 
          value={kontak}
          onChange={(e) => setKontak(e.target.value)}
          required 
        />
        
        <button type="submit">Kirim Pesanan</button>
      </form>
      
      <div className="auth">
        <h3>Jika Anda Ingin Memesan</h3>
        <p>
          Silahkan <Link href="/login">login</Link> atau <Link href="/register">register</Link> terlebih dahulu.<br/>
          Setelah memesan kami akan segera menghubungi Anda untuk konfirmasi dan detail lebih lanjut.
        </p>
      </div>
    </section>
  );
}
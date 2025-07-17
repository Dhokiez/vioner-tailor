// File: app/kontak/page.jsx

export const metadata = {
  title: 'Kontak - Vioner Tailor',
  description: 'Lokasi dan kontak Vioner Tailor. Hubungi kami untuk pertanyaan',
};

export default function KontakPage() {
  return (
    <>
      <div className="map-container">
        <h2>Lokasi Kami</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.530232251354!2d112.73322837489512!3d-7.294212992714429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf83c957a19%3A0x2da36e974fce4a62!2sRoyal%20Plaza!5e0!3m2!1sen!2sid!4v1717787834789!5m2!1sen!2sid"
          width="600" 
          height="450" 
          style={{ border:0 }} 
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div className="contact-container">
        <p>Alamat: Jl. Ahmad Yani No.16-18, Wonokromo, Surabaya</p>
      </div>

      {/* Bagian FAQ */}
      <div className="faq-container">
        <h2>Frequently Asked Questions (FAQ)</h2>
        
        <div className="faq-item">
          <h3>1. Berapa lama waktu pembuatan kostum atau jas tailor?</h3>
          <p>Waktu pembuatan biasanya memakan waktu sekitar 7-14 hari, tergantung pada jenis desain dan bahan yang digunakan. Namun, waktu ini bisa lebih cepat atau lebih lama tergantung pada permintaan khusus dan antrian kerja.</p>
        </div>
        
        <div className="faq-item">
          <h3>2. Apakah saya perlu membuat janji sebelum datang?</h3>
          <p>Tidak perlu anda bisa langsung datang, atau anda bisa menghubungi kami melalui WhatsApp atau email.</p>
        </div>

        <div className="faq-item">
          <h3>3. Apakah bisa membuat kostum dengan desain custom?</h3>
          <p>Ya, kami menerima pesanan untuk kostum custom sesuai dengan desain yang Anda inginkan. Anda bisa berdiskusi langsung dengan kami untuk menentukan bahan, model, dan detail lainnya.</p>
        </div>

        <div className="faq-item">
          <h3>4. Apakah ada layanan antar jemput untuk pengambilan dan pengantaran pesanan?</h3>
          <p>Saat ini kami tidak menyediakan layanan antar jemput. Namun, Anda dapat mengambil dan mengantarkan pesanan Anda sendiri ke lokasi kami.</p>
        </div>

        <div className="faq-item">
          <h3>5. Apa yang harus saya siapkan untuk proses pengukuran?</h3>
          <p>Pastikan Anda mengenakan pakaian yang nyaman dan tidak terlalu ketat. Anda juga bisa membawa contoh gaun atau jas yang ingin dijadikan referensi desainnya. Kami akan membantu mengukur dan menyesuaikan agar sesuai dengan bentuk tubuh Anda.</p>
        </div>
      </div>

      {/* Bagian "Ada Pertanyaan? Hubungi Kami" */}
      <div className="contact-container">
        <h2>Ada Pertanyaan?</h2>
        <h2>Hubungi Kami</h2>
        <div className="contact-icon-group">
          <a 
            href="https://wa.me/62859106844696" 
            className="contact-icon-button whatsapp-bg"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Hubungi via WhatsApp"
          >
            <i className="ph-bold ph-whatsapp-logo"></i> {/* Ikon WhatsApp */}
          </a>
          
          <a 
            href="mailto:vionertailor@gmail.com" 
            className="contact-icon-button email-bg"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Kirim Email"
          >
            <i className="ph ph-envelope-simple"></i> {/* Ikon Email */}
          </a>
        </div>
      </div>
    </>
  );
}

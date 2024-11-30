/* eslint-disable no-unused-vars */
import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Selamat Datang di Website BagInstyle!</h1>
      </header>

      <section className="about-content">
        <div className="about-image">
          <img src="/gambar/gambarlogo.webp" alt="Tas Terbaik" />
        </div>
        <div className="about-description">
          <h2>About</h2>
          <p>
          Saya membuat web penjualan tas ini dengan fitur-fitur yang sesuai dengan kebutuhan aplikasi penjualan, termasuk sistem pencarian produk, filter kategori, Setiap fitur dirancang dengan teliti dan dikembangkan dengan sabar, memastikan pengalaman berbelanja yang cepat, mudah, dan aman.

Dengan teknologi React, website ini menawarkan antarmuka yang responsif dan cepat, memberikan kemudahan bagi pelanggan dalam menelusuri berbagai koleksi tas yang tersedia. Selain itu, setiap transaksi diproses dengan sistem yang aman dan terpercaya, sehingga Anda dapat berbelanja dengan nyaman.

Saya berharap website ini dapat memberikan solusi bagi mereka yang mencari tas berkualitas dengan harga fantastis, serta memberikan pengalaman berbelanja yang menyenangkan. Terima kasih telah memilih website kami untuk memenuhi kebutuhan tas Anda!
          </p>
          <p>
            Dengan harga yang bersaing dan desain yang modern, kami menjamin Anda akan menemukan tas yang cocok untuk setiap kesempatan.
          </p>
        </div>
      </section>

      <section className="about-gallery">
        <h2>Galeri Produk</h2>
        <div className="gallery-images">
          <img src="https://s4.bukalapak.com/img/96685556203/s-463-463/data.jpeg.webp" alt="Tas 1" />
          <img src="https://down-id.img.susercontent.com/file/039735ba0b45ade262da63f1ea28f6d2" alt="Tas 2" />
          <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//95/MTA-68315423/no-brand_promo-tas-wanita-branded-lokal-tas-selempang-wanita-tas-fashion_full01.jpg" alt="Tas 3" />
          <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/4/f74b620f-e5a3-4b21-a940-4e6ed3af204a.jpg" alt="Tas 4" />
        </div>
      </section>

      

      

      

      <section className="about-map">
        <h2>Temukan Kami</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12690.665578352168!2d106.6296581!3d-6.2040706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e468b7d45f91%3A0x924ec0de1d3f22c5!2sToko%20Tas%20Kami!5e0!3m2!1sid!2sid!4v1617950318985!5m2!1sid!2sid"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen="true"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default About;

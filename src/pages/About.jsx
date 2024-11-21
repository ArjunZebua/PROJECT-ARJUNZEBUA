export default function About() {
    return (
      <div className="about-container">
        <section className="about-header">
          <h1>Selamat Datang di Dunia Tas Kami</h1>
          <p>Temukan tas yang cocok untuk setiap petualanganmu, dengan desain modern dan kualitas terbaik.</p>
        </section>
  
        <section className="about-info">
          <div className="about-text">
            <h2>Kenapa Memilih Kami?</h2>
            <p>
              Di sini, kami percaya bahwa tas bukan hanya tentang fungsionalitas, tetapi juga tentang 
              menciptakan gaya dan kenyamanan. Kami berkomitmen untuk menyediakan tas dengan desain 
              inovatif, bahan berkualitas tinggi, dan berbagai pilihan yang sesuai dengan gaya hidupmu.
            </p>
            <ul>
              <li><strong>Kualitas Terbaik:</strong> Setiap tas dirancang dengan bahan premium yang tahan lama.</li>
              <li><strong>Desain Stylish:</strong> Menggabungkan keindahan dengan fungsionalitas.</li>
              <li><strong>Kenyamanan Maksimal:</strong> Tas yang mudah dibawa dan nyaman digunakan sepanjang hari.</li>
              <li><strong>Ramai Pilihan:</strong> Dari tas ransel, tas selempang, hingga tas tangan, kami punya semuanya!</li>
            </ul>
          </div>
  
          <div className="about-image">
            <img src="https://asset-a.grid.id/crop/0x0:0x0/700x0/photo/2022/05/10/book-totejpg-20220510115931.jpg" alt="About Tas" />
          </div>
        </section>
  
        <section className="mission-vision">
          <h2>Visi & Misi Kami</h2>
          <div className="vision">
            <h3>Visi</h3>
            <p>
              Menjadi merek tas terkemuka yang dipercaya oleh pelanggan untuk kualitas, desain, dan kenyamanan.
            </p>
          </div>
          <div className="mission">
            <h3>Misi</h3>
            <p>
              Misi kami adalah menyediakan produk tas dengan desain terbaik yang mengutamakan kualitas dan 
              kenyamanan bagi setiap individu yang memakainya, tanpa mengorbankan harga yang terjangkau.
            </p>
          </div>
        </section>
  
        <section className="footer-about">
          <h3>Jelajahi Koleksi Kami</h3>
          <p>
            Temukan tas pilihan yang sesuai dengan gaya hidupmu di toko kami. Setiap produk kami adalah 
            perpaduan antara seni dan kenyamanan!
          </p>
          <button className="explore-button">Jelajahi Sekarang</button>
        </section>
      </div>
    );
  }
  
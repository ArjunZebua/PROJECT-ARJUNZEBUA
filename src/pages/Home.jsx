import { useState, useRef } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null); // Referensi untuk video

  const handleWatchVideo = () => {
    setShowVideo(true); // Tampilkan video
  };

  const handleCloseVideo = () => {
    setShowVideo(false); // Sembunyikan video
    videoRef.current.pause(); // Hentikan video ketika ditutup
    videoRef.current.currentTime = 0; // Reset video ke awal
  };

  return (
    <div className="container-page">
      {/* Banner Section */}
      <section className="home-banner">
        <div className="overlay">
          <div className="text-content">
            <h1>Find Yourself Here</h1>
            <div className="buttons">
              <button className="primary-button">Book Now</button>
              <button className="secondary-button" onClick={handleWatchVideo}>
                Watch Video
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://down-id.img.susercontent.com/file/id-11134207-7qul2-litqb3tqph8b3f"
          alt="Lobby"
          className="background-image"
        />
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal">
          <div className="video-content">
            <button className="close-button" onClick={handleCloseVideo}>
              ✖
            </button>
            <video
              ref={videoRef} // Menambahkan referensi ke video
              src="/video/Behind the Scenes_ Making of the Nano Tote.mp4"
              autoPlay // Video langsung diputar
              style={{
                width: "100%",
                borderRadius: "10px",
                objectFit: "cover", // Optional: To make sure the video fits well in the modal
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

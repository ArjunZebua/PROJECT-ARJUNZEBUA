import { useState } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchVideo = () => {
    setShowVideo(true); // Tampilkan video
  };

  const handleCloseVideo = () => {
    setShowVideo(false); // Sembunyikan video
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
            <iframe
              src="https://www.youtube.com/embed/0e13OBThPiM"
              title="Example Video"
              style={{ border: "none" }} // Menggantikan frameBorder
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-frame"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

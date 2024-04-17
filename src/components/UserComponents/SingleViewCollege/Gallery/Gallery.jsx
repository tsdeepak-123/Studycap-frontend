import React, { useState } from "react";
import "./Gallery.css";

function Gallery({images}) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
    <p className="text-4xl text-black flex justify-center font-bold mb-10">Our Gallery</p>
    <div className="gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery item ${index}`}
          onClick={() => setSelectedImg(img)}
          className="gallery-img"
        />
      ))}

      {selectedImg && (
        <div className="backdrop" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Full screen" className="full-img" />
          <span className="close-btn" onClick={() => setSelectedImg(null)}>
            ×
          </span>
        </div>
      )}
    </div>
    </>
  );
}

export default Gallery;

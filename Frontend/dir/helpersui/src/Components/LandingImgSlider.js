import React, { useState, useEffect } from 'react';

const imageUrls = [
  'https://firebasestorage.googleapis.com/v0/b/helpers--planet.appspot.com/o/pexels-hitesh-choudhary-1739842.jpg?alt=media&token=1f868cb7-ac4b-4674-a9d8-9c7b46c84be5',
  'https://firebasestorage.googleapis.com/v0/b/helpers--planet.appspot.com/o/pexels-dazzle-jam-1125850.jpg?alt=media&token=19eec293-0ead-47f0-a7a7-3caaa007dc27',
  'https://firebasestorage.googleapis.com/v0/b/helpers--planet.appspot.com/o/pexels-nicolas-rizzon-4212040.jpg?alt=media&token=ae11e97f-b13a-4279-a371-e7b375f4d96c',
  // Add more image URLs as needed
];

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const imageContainerStyle = {
  overflow: 'hidden',
  maxWidth: '80%',
  maxHeight: '80%',
  position: 'relative',
};

const slidingAnimationStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  transition: 'transform 1s ease-in-out',
};

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  const slidingStyle = {
    transform: `translateX(-${currentImageIndex * 100}%)`,
  };

  return (
    <div style={centerStyle}>
      <div style={imageContainerStyle}>
        <div style={{ ...slidingAnimationStyle, ...slidingStyle }}>
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              style={{
                flex: '0 0 100%',
                objectFit: 'cover',
                height: '900px',
                transition: 'opacity 1s ease-in-out',
                opacity: index === currentImageIndex ? 1 : 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
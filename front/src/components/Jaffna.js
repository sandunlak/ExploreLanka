import React, { useState, useEffect, useRef } from "react";

const Jaffna = () => {
  const jaffnaDetailsRef = useRef();

  // States for the slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = [
    { src: "https://i.postimg.cc/HkT7CK5P/jaffna.jpg", name: "Jaffna City" },
    { src: "https://i.postimg.cc/m2zmHP5G/jaffnakovil.jpg", name: "Nallur Kandaswamy Kovil" },
    { src: "https://i.postimg.cc/GhWqJbWT/Casuarina-Beach.jpg", name: "Casuarina Beach" },
    { src: "https://i.postimg.cc/YS3RHYhQ/Dutch-Fort-Jaffna.jpg", name: "Jaffna Dutch Fort" },
    { src: "https://i.postimg.cc/0Qyf2jwF/Neduntheevu.jpg", name: "Neduntheevu (Delft Island)" },
  ];

  // Slide transition effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideImages.length - 1 : prevSlide - 1
    );
  };

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
  };

  return (
    <div
      ref={jaffnaDetailsRef}
      style={{
        position: "relative",
        padding: "20px",
        color: "white",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Image Slider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "700px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 1s ease-in-out",
            transform: `translateX(-${currentSlide * 100}%)`,
            height: "100%",
          }}
        >
          {slideImages.map((img, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                minWidth: "100%",
                height: "100%",
              }}
            >
              <img
                src={img.src}
                alt={img.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* Place Name Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  color: "black",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  fontSize: "30px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {img.name}
              </div>
            </div>
          ))}
        </div>

        {/* White blur overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "150px",
            background: "linear-gradient(to bottom, white, transparent)",
            zIndex: 1,
          }}
        ></div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            fontSize: "20px",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            fontSize: "20px",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Jaffna;

import React, { useState, useEffect } from "react";

const PresentationBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true); // State to manage fade effect
  const slideImages = [
    {
      src: "https://i.postimg.cc/RVysy9pQ/pexels-roman-odintsov-4553621.jpg",
      title: "Your Key to Adventure",
      subtitle: "Unlock excitement and uncover hidden treasures around the globe.",
    },
    {
      src: "https://i.postimg.cc/G3MSPvkf/pexels-freestockpro-319961.jpg",
      title: "Discover New Horizons",
      subtitle: "Explore the world like never before.",
    },
    {
      src: "https://i.postimg.cc/63fFxS46/pexels-freestockpro-11266598.jpg",
      title: "Luxury at Its Best",
      subtitle: "Stay at top-tier destinations worldwide.",
    },
    {
      src: "https://i.postimg.cc/ZqhfYHSW/pexels-freestockpro-320006-1.jpg",
      title: "Unforgettable Journeys",
      subtitle: "Create memories that last a lifetime.",
    },
    {
      src: "https://i.postimg.cc/pryCc1D6/pexels-freestockpro-319899.jpg",
      title: "Experience Paradise",
      subtitle: "Your dream vacation awaits.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
        setFade(true);
      }, 1000); // Duration of fade-out
    }, 5000); // Duration of each slide
    return () => clearInterval(interval);
  }, [slideImages.length]);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slideImages.length - 1 : prevSlide - 1
      );
      setFade(true);
    }, 1000);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
      setFade(true);
    }, 1000);
  };

  const selectSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(true);
    }, 1000);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {slideImages.map((img, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentSlide && fade ? 1 : 0,
            visibility: index === currentSlide || !fade ? "visible" : "hidden",
            transition: "opacity 2s ease-in-out 1s, visibility 2s ease-in-out 1s",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              color: "white",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            <h1 style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>{img.title}</h1>
            <p style={{ fontSize: "1.5rem" }}>{img.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "2%",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          border: "none",
          color: "white",
          fontSize: "2rem",
          cursor: "pointer",
          zIndex: 10,
          padding: "10px",
          borderRadius: "50%",
        }}
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "2%",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          border: "none",
          color: "white",
          fontSize: "2rem",
          cursor: "pointer",
          zIndex: 10,
          padding: "10px",
          borderRadius: "50%",
        }}
      >
        &#8594;
      </button>

      {/* Dot Indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        {slideImages.map((_, index) => (
          <div
            key={index}
            onClick={() => selectSlide(index)}
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              background: index === currentSlide ? "white" : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PresentationBar;

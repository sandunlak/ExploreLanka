import React, { useState, useEffect } from 'react';

const Banner = () => {
  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images for the slideshow
  const images = [
    "https://i.postimg.cc/prbK5Jc9/pexels-roman-odintsov-4553365.jpg",
    "https://i.postimg.cc/Fsvj9GJ8/pexels-freestockpro-319976.jpg",
    "https://i.postimg.cc/J4QjtJNn/pexels-freestockpro-330260.jpg",
    "https://i.postimg.cc/Gp4DM5Z8/pexels-elina-sazonova-4403903.jpg",
    "https://i.postimg.cc/PJj85rNY/pexels-freestockpro-320006.jpg"
  ];

  // Effect to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '60px 40px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '50%' }}>
        <h1 style={{ fontSize: '5em', marginBottom: '20px' }}>Explore the Wonders in <span style={{ color: '#007bff' }}>Sri Lanka</span></h1>
        <p style={{ fontSize: '2em', marginBottom: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button style={{ backgroundColor: '#000', fontSize: '1.5em', color: '#fff', padding: '15px 50px', border: 'none', cursor: 'pointer', borderRadius: '30px' }}>Get started</button>
      </div>
      <div>
        <img src={images[currentImageIndex]} alt="Explore Sri Lanka" style={{ maxWidth: '70%', borderRadius: '30px', transition: 'all 1s ease-in-out' }} />
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div style={{ display: 'flex', padding: '60px 40px', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: '40px' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}></div>
        <img src="https://i.postimg.cc/KzfW5bzY/sarmat-batagov-cu-Zbr-Yoimv8-unsplash.jpg" alt="Palm Trees" style={{ width: '500px', borderRadius: '20px' }} />
      </div>
      <div>
        <h2 style={{ color: '#007bff', fontSize: '3em' }}>Why Choose Us</h2>
        <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Lorem ipsum dolor sit amet</h1>
        <p style={{ fontSize: '1.5em', marginBottom: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse nulla enim aperiam culpa cupiditate quas animi ducimus blanditiis! Dolorum, perspiciatis.</p>
        <p style={{ fontSize: '1.5em' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse nulla enim aperiam culpa cupiditate quas animi ducimus blanditiis! Dolorum, perspiciatis.</p>
      </div>
    </div>
  );
};

const Services = () => {
  const serviceStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    padding: '20px', 
    border: '1px solid #ddd', 
    borderRadius: '10px', 
    width: '200px',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const serviceHoverStyle = {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  };

  const [hover, setHover] = React.useState(-1);

  return (
    <div style={{ padding: '60px 40px', backgroundColor: '#fff' }}>
      <h2 style={{ color: '#007bff', fontSize: '3em', textAlign: 'center' }}>Our Services</h2>
      <p style={{ fontSize: '1.5em', textAlign: 'center', marginBottom: '40px' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat reprehenderit autem ea ab repellat eum, quasi modi.</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
        {[{src: "hotel-icon.png", alt: "Hotel Reservation", text: "Hotel Reservation"},
          {src: "tour-package-icon.png", alt: "Tour Package Reservation", text: "Tour Package Reservation"},
          {src: "vehicle-icon.png", alt: "Vehicle Reservation", text: "Vehicle Reservation"},
          {src: "train-icon.png", alt: "Train Reservation", text: "Train Reservation"},
          {src: "restaurant-icon.png", alt: "Restaurant Reservation", text: "Restaurant Reservation"},
          {src: "event-icon.png", alt: "Event Reservation", text: "Event Reservation"}
        ].map((service, index) => (
          <div 
            key={index} 
            style={hover === index ? {...serviceStyle, ...serviceHoverStyle} : serviceStyle}
            onMouseEnter={() => setHover(index)} 
            onMouseLeave={() => setHover(-1)}
          >
            <img src={service.src} alt={service.alt} style={{ marginBottom: '10px' }} />
            <p style={{ fontSize: '1.2em' }}>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const NewSection = () => {
  return (
    <div style={{ display: 'flex', padding: '60px 40px', backgroundColor: '#fff' }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ color: '#007bff', fontSize: '3em' }}>Travel with us</h2>
        <h1 style={{ fontSize: '2em', marginBottom: '20px' }}>TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS</h1>
        <p style={{ fontSize: '1.5em', marginBottom: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse nulla enim aperiam culpa cupiditate quas animi ducimus blanditiis! Dolorum, perspiciatis.</p>
        <p style={{ fontSize: '1.5em' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse nulla enim aperiam culpa cupiditate quas animi ducimus blanditiis! Dolorum, perspiciatis.</p>
      </div>
      <div style={{ marginLeft: '40px' }}>
        <img src="https://i.postimg.cc/4xqY9Sn8/tatiana-kachanovetskaia-F-URY4-Tc-XNI-unsplash.jpg" alt="New Adventure" style={{ maxWidth: '500px', borderRadius: '20px' }} />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <Services />
      <NewSection />
    </div>
  );
};

export default App;

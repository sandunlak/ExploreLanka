import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const locations = [
  { name: "Jaffna", x: "35%", y: "15%", imageUrl: "https://i.postimg.cc/9FVnbhNz/jaff.jpg", path: "/Jaffna", scrollDistance: 1000 },
  { name: "Trincomalee", x: "50%", y: "30%", imageUrl: "https://via.placeholder.com/100", path: "/trincomalee", scrollDistance: 600 },
  { name: "Sigiriya", x: "45%", y: "45%", imageUrl: "https://via.placeholder.com/100", path: "/sigiriya", scrollDistance: 400 },
  { name: "Dambulla Cave Temples", x: "30%", y: "50%", imageUrl: "https://via.placeholder.com/100", path: "/dambulla", scrollDistance: 250 },
  { name: "Polonnaruwa", x: "58%", y: "50%", imageUrl: "https://via.placeholder.com/100", path: "/polonnaruwa", scrollDistance: 150 },
  { name: "Kandy", x: "40%", y: "65%", imageUrl: "https://via.placeholder.com/100", path: "/kandy", scrollDistance: 350 },
  { name: "Nuwara Eliya", x: "57%", y: "70%", imageUrl: "https://via.placeholder.com/100", path: "/nuwara-eliya", scrollDistance: 100 },
  { name: "Yala National Park", x: "65%", y: "75%", imageUrl: "https://via.placeholder.com/100", path: "/yala", scrollDistance: 200 },
  { name: "Galle", x: "35%", y: "85%", imageUrl: "https://via.placeholder.com/100", path: "/galle", scrollDistance: 250 },
];

const SriLankaMap = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (location) => {
    setHoveredLocation(location);
  };

  const handleMouseLeave = () => {
    setHoveredLocation(null);
  };

  const handleClick = (location) => {
    // Navigate to the location's page
    navigate(location.path, { replace: true });

    // Scroll down the page by the specified amount for this location
    setTimeout(() => {
      window.scrollBy(0, location.scrollDistance); // Scroll by the specified scrollDistance for each location
    }, 0);
  };

  const getPopupPosition = (x) => {
    return { left: "110%", transform: "translateX(10px)" };
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <img
        src="https://i.postimg.cc/tJ87XJxt/map2.jpg"
        alt="Sri Lanka Map"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      {locations.map((location, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: location.y,
            left: location.x,
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleMouseEnter(location)}
          onMouseLeave={handleMouseLeave}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "red",
              borderRadius: "50%",
              border: "2px solid white",
              display: "block",
            }}
            onClick={() => handleClick(location)} // Handle the click event
          ></span>
          {hoveredLocation === location && (
            <div
              style={{
                position: "absolute",
                top: "-60px",
                ...getPopupPosition(location.x),
                backgroundColor: "white",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: 10,
                width: "300px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={location.imageUrl}
                alt={location.name}
                style={{ width: "50px", height: "50px", marginRight: "10px", borderRadius: "50%" }}
              />
              <div>
                <h3 style={{ margin: "0", fontSize: "14px" }}>{location.name}</h3>
                <p style={{ margin: "5px 0 0", fontSize: "12px" }}>
                  Details about {location.name}...
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SriLankaMap;

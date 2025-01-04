import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.section}>
        <h3 style={{...styles.heading, ...styles.largeText}}>Travely</h3>
        <p style={{...styles.text, ...styles.largeText}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio non nemo veniam, natus accusantium. Praesentium, doloribus mollitia dignissimos similique optio.
        </p>
        <div style={styles.socialIcons}>
          <a href="#"><img src="whatsapp-icon.png" alt="WhatsApp" /></a>
          <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
          <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
        </div>
      </div>
      <div style={styles.section}>
        <h3 style={{...styles.heading, ...styles.largeText}}>Reservations</h3>
        <ul style={styles.list}>
          <li><a href="#" style={{...styles.link, ...styles.largeText}}>Hotels</a></li>
          <li><a href="#" style={{...styles.link, ...styles.largeText}}>Tour Packages</a></li>
          <li><a href="#" style={{...styles.link, ...styles.largeText}}>Vehicles</a></li>
          <li><a href="#" style={{...styles.link, ...styles.largeText}}>Restaurants</a></li>
          <li><a href="#" style={{...styles.link, ...styles.largeText}}>Events</a></li>
        </ul>
      </div>
      <div style={styles.section}>
        <h3 style={{...styles.heading, ...styles.largeText}}>Support</h3>
        <ul style={styles.list}>
          <li><a href="#" style={{...styles.link, ...styles.largeText}}>Contact us</a></li>
          <li><a href="#" style={{...styles.link, ...styles.largeText}}>About us</a></li>
        </ul>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '90px',
    backgroundColor: '#000',
    color: '#fff',
  },
  section: {
    flex: 1,
  },
  heading: {
    color: '#1e90ff',
  },
  text: {
    color: '#ccc',
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    marginBottom: '10px',
  },
  linkHover: {
    textDecoration: 'underline',
  },
  largeText: {
    fontSize: '1.2em',
  },
};

export default Footer;

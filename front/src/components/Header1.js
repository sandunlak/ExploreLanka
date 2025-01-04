import React from 'react';

const Header = () => {
    const handleMouseEnter = (e) => {
        e.currentTarget.querySelector('.dropdown-content').style.display = 'block';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.querySelector('.dropdown-content').style.display = 'none';
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px 20px', 
            backgroundColor: '#f8f9fa', 
            position: 'sticky', 
            top: 0, 
            zIndex: 1000 
        }}>
            <div style={{ padding: '10px 20px', fontSize: '40px', fontWeight: 'bold', color: '#007bff' }}>Travely</div>
            <div style={{ display: 'flex', gap: '20px' }}>
                <a href="#" style={{ textDecoration: 'none', color: '#000', fontSize: '30px' }}>Home</a>
                <div style={{ position: 'relative', display: 'inline-block' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a href="#" style={{ textDecoration: 'none', color: '#000', fontSize: '30px' }}>Reservations</a>
                    <div className="dropdown-content" style={{ display: 'none', position: 'absolute', backgroundColor: '#f1f1f1', minWidth: '160px', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: '1' }}>
                        <a href="#" style={{ color: 'black', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Hotels</a>
                        <a href="#" style={{ color: 'black', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Tour Packages</a>
                        <a href="#" style={{ color: 'black', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Vehicles</a>
                        <a href="#" style={{ color: 'black', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Events</a>
                        <a href="#" style={{ color: 'black', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Trains</a>
                    </div>
                </div>
                <a href="#" style={{ textDecoration: 'none', color: '#000', fontSize: '30px' }}>Contact us</a>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '25px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff' }}>Sign in</button>
                <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '25px', cursor: 'pointer', backgroundColor: '#343a40', color: '#fff' }}>Sign up</button>
            </div>
        </div>
    );
};

export default Header;

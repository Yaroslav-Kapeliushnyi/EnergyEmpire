import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="glass-panel" style={{
      position: 'sticky',
      top: '1rem',
      zIndex: 100,
      margin: '0 2rem',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(90deg, #00d4ff, #00ffaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          EnergyStation
        </span>
      </Link>
      <div>
        {/* Attribution removed as per request */}
      </div>
    </nav>
  );
};

export default Navbar;

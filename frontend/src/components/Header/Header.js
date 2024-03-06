import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

export default function Header() {
  const user = { name: 'John' };
  const {cart}=useCart();
  const logout = () => {};
  const [isMenuOpen, setMenuOpen] = useState(false);

  const headerStyle = {
    background: 'white',
    padding: '0',
    borderBottom: '1px solid #e72929',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '1rem',
    display: 'inline-block',
  };

  const hoverStyle = {
    background: '#e72929',
    color: 'white',
    cursor: 'pointer',
  };

  const containerStyle = {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    fontWeight: 'bold',
    padding: '1rem',
  };

  const ulStyle = {
    display: 'flex',
    listStyleType: 'none',
    margin: '0',
  };

  const menuContainerStyle = {
    position: 'relative',
  };

  const menuStyle = {
    position: 'absolute',
    zIndex: '1001',
    backgroundColor: 'whitesmoke',
    display: isMenuOpen ? 'block' : 'none',
  };

  const cartCountStyle = {
    backgroundColor: '#ff4d4d',
    color: 'white',
    padding: '0.1rem 0.45rem',
    borderRadius: '100rem',
    fontSize: '0.9rem',
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          Food Mine!
        </Link>
        <nav>
          <ul style={ulStyle}>
            {user ? (
              <li style={menuContainerStyle} onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
                <Link to="/dashboard" style={{ ...linkStyle, ...hoverStyle }}>
                  {user.name}
                </Link>
                <div style={{ ...menuStyle, ...hoverStyle }}>
                  <Link to="/profile" style={linkStyle}>
                    Profile
                  </Link>
                  <Link to="/orders" style={linkStyle}>
                    Orders
                  </Link>
                  <a onClick={logout} style={linkStyle}>
                    Logout
                  </a>
                </div>
              </li>
            ) : (
              <Link to="/login" style={{ ...linkStyle, ...hoverStyle }}>
                Login
              </Link>
            )}
            <li>
              <Link to="/cart" style={{ ...linkStyle, ...hoverStyle }}>
                Cart
                {cart.totalCount > 0 && <span style={cartCountStyle}>{cart.totalCount}</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

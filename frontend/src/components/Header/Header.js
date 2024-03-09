import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import classes from './header.module.css';
import { useAuth } from '../../hooks/useAuth';

import YouTubeLogo from './youtube.svg';

export default function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  const openYouTube = () => {
    window.location.href = 'https://www.youtube.com';
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          Nearbys!
        </Link>
        <button className={classes.youtubeButton} onClick={openYouTube}>
          <img src={YouTubeLogo} alt="YouTube" className={classes.youtubeLogo} />
        </button>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}

            <li>
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

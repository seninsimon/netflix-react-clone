import React from 'react';
import { signOut } from 'firebase/auth'; // Import signOut from Firebase
import { auth } from '../../firebase'; // Import Firebase auth object
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

const Navbar = () => {
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // On successful sign out, you can add a redirect to the login page if needed
      console.log('User signed out');
      window.location.reload(); // Reload the page or use routing to redirect to the login page
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  return (
    <div className='Navbar'>
      <div className="Navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children's</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className='dropdown'>
            <p onClick={handleSignOut}>Sign Out</p> {/* Add onClick handler to Sign Out */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

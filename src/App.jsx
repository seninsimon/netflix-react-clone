import React, { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Row from './netflixComponents/row';
import requests from './request';
import Banner from './netflixComponents/Banner';
import Footer from './components/Footer/Footer';
import Login from './login'; // import the Login component
import { auth } from './firebase'; // Import Firebase methods
import Navbar from './components/Navbar/Navbar'; // Import Navbar component

const App = () => {
  const [user, setUser] = useState(null); // State to manage user

  useEffect(() => {
    // Monitor authentication state (detect user login state)
    const unsubscribe = auth.onAuthStateChanged(setUser);

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* Render Login if the user is not logged in */}
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          {/* Render Navbar only if the user is logged in */}
          <Navbar user={user} setUser={setUser} />
          
          {/* Render the Netflix clone content if the user is logged in */}
          <Home />
          <Banner />
          <Row title="Netflix Originals" fetchUrl={requests.netflixOriginals} isLargerow />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.topRated} />
          <Row title="Action Movies" fetchUrl={requests.actionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.comedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.horrorMovies} />
          <Row title="Romantic Movies" fetchUrl={requests.romanceMovies} />
          <Row title="Documentaries" fetchUrl={requests.documentaries} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;

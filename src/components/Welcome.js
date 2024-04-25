import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import { auth } from './firebase';

function Welcome() {

  const navigate = useNavigate(); 

  const email = localStorage.getItem('email');

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      localStorage.removeItem('email');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('email');
    
    auth.signOut().then(() => {
      navigate('/login');
    }).catch((error) => {
      console.error("Logout Failed:", error.message);
    });
  };

  const location=useLocation();

  return (
    <div>
      <h2>Welcome, {location.state.id}!</h2> {/* for node server with mongodb*/}
      {/* <h2>Welcome, {email}!</h2> */}   {/* for if u login or sigh up with google*/}
      <h4>This is your dashboard.</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Welcome;





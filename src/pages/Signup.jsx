import React from 'react';
import Template from '../components/Forms/Template';
import signup from '../assets/signup.png';
import NavbarL from '../components/Navbars/NavbarL';

const Signup = ({ setLoggedIn }) => {
  return (
    <div>
      <NavbarL />
      <Template
        title="Join the millions learning to code with EduVerse for free"
        desc1="Build skills for today, tomorrow, and beyond"
        desc2="Education to future-proof your career"
        image={signup} // If you plan to use this image, ensure to apply it in the Template component.
        formtype="signup"
        setLoggedIn={setLoggedIn}
      />
    </div>
  );
};

export default Signup;

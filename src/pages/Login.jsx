import React from 'react'
import Template from '../components/Forms/Template';
import login from '../assets/login.png';
import NavbarL from '../components/Navbars/NavbarL';

const Login = ({setLoggedIn}) => {
  return (
      <div>
        <NavbarL/>
       <Template 
       title='Welcome Back'
       desc1='Build skills for today,tommorow and bbeyond'
       desc2='Education to future proof your career'
       image={login}
       formtype='login'
       setLoggedIn={setLoggedIn}
       />
       </div>
    
  )
}

export default Login
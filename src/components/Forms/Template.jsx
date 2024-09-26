import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { FcGoogle } from "react-icons/fc";
import Spline from '@splinetool/react-spline';
import backgroundImage from './.././../assets/background.jpeg'; // Adjust the path as necessary

const Template = ({ title, desc1, desc2, image, formtype, setLoggedIn }) => {
  return (
    <div
      className='relative w-screen h-screen flex justify-center items-center text-richblack-25'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability (optional) */}
      <div className='absolute inset-0 bg-black opacity-50'></div>
      
      {/* Content Wrapper */}
      <div className='relative z-10 flex justify-between items-center w-[65%] gap-5'>
        {/* Left side div */}
        <div className='w-[45%]'>
          <div>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <h4 className='text-[1.125rem] leading-[1.625rem] mt-4 text-richblack-100'>{desc1}</h4>
            <h4 className='text-[1.125rem] leading-[1.625rem] text-black italic'>{desc2}</h4>
          </div>

          {/* Conditional Rendering for Forms */}
          {formtype === 'signup' ? (
            <SignupForm setLoggedIn={setLoggedIn} />
          ) : (
            <LoginForm setLoggedIn={setLoggedIn} />
          )}

          {/* Buttons div */}
          <div className='mt-4'>
            <span className='flex items-center'>
              <div className='h-[1px] w-[50%] bg-richblack-700' />
              <span className='font-bold text-richblack-700 px-2'>OR</span>
              <div className='h-[1px] w-[50%] bg-richblack-700' />
            </span>
            <button className='w-full mt-4 flex justify-center items-center border-[2px] rounded-md border-richblack-100 text-richblack-100 font-semibold px-[12px] py-[8px] gap-2 hover:scale-95 transition-transform duration-300'>
              <FcGoogle /> Sign in with Google
            </button>
          </div>
        </div>

        {/* Right side div */}
        <div className='relative max-w-[450px] w-[450px] h-[560px]'>
          {/* Spline integration */}
          <Spline scene="https://prod.spline.design/PMqvvgRRBeQhKwCm/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

export default Template;

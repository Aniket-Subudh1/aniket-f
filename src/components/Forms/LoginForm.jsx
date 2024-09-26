import {React,useState} from 'react'

import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = ({setLoggedIn}) => {

  const [formData,setformData] = useState({email: '', password: ''});

  const changeHandler = (event) => {
    const {name,value} = event.target;
    setformData((prevData) => {
        return { ...prevData, [name]:value};
    })
  }

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    toast.success('logged in');
    setLoggedIn(true);
    navigate('/dashboard');
  }

  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-6 mt-5'>
        
        <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></label>
            <input type='email' placeholder='Enter email address' id='email' name='email' value={FormData.email} onChange={changeHandler} required className='bg-richblack-800 p-[12px] rounded-md border-[1px] border-transparent border-b-richblack-25'></input>
        </div>



        <button type='submit' className='w-full mt-7 mb-4 bg-yellow-400 border rounded-md text-richblack-900 font-semibold px-[12px] py-[8px] hover:scale-95 transition-transform duration-300'>Sign in</button>

    </form>
  )
}

export default LoginForm;
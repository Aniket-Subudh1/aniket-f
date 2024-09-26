import {React,useState} from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const SignupForm = ({setLoggedIn}) => {

//  creating state variable and  state change function for student-instructor button in signup page
  const [studentBut,setstudentBut] = useState(true);  
  const [instructorBut, setinstructorBut] = useState(false);

  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [FormData, setFormData] = useState({firstName: '',lastName: '',email:'',password:'',confirmPassword:''});

  const changeHandler = (event) => {
    const {name,value} = event.target;
    setFormData( (prevdata)=> {
       return { ...prevdata, [name]: value };
    })
  }

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if(FormData.confirmPassword === FormData.password){
        toast.success('Account Created');
        setLoggedIn(true);
        navigate('/dashboard');
    }
    else{
        toast.error('Passwords do not match');
        setFormData( (prevdata)=> {
            return { ...prevdata, [FormData.confirmPassword]:''};
        })
    }

  }

  return (
    <div className='flex flex-col gap-2 justify-center w-full'>
        {/* student-instructor tab */}
        <div className='flex bg-richblack-700 px-1 py-1 rounded-full w-[50%] justify-between items-center mt-3'>
           <button onClick={()=>{setstudentBut(true);setinstructorBut(false);}} className={`${studentBut ? 'bg-black' : 'bg-transparent'} px-4 py-2 rounded-full`} >Student</button>
           <button onClick={()=>{setinstructorBut(true);setstudentBut(false);}} className={`${instructorBut ? 'bg-black' : 'bg-transparent'} px-5 py-2 rounded-full`}>Instructor</button>
        </div>

        <form onSubmit={submitHandler} className='flex flex-col gap-3 mt-5'>
        <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1 w-[48%]'>
                    <label htmlFor='firstname' className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></label>
                    <input type='text' id='firstname' name='firstName' value={FormData.firstName} placeholder='First name' onChange={changeHandler} required className='bg-richblack-800 p-[12px] rounded-md border-[1px] border-transparent border-b-richblack-25'></input>
                </div>
                <div className='flex flex-col gap-1 w-[48%]'>
                    <label htmlFor='lastname' className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></label>
                    <input type='text' id='lastname' name='lastName' value={FormData.lastName} placeholder='Last name' onChange={changeHandler} required className='bg-richblack-800 p-[12px] rounded-md border-[1px] border-transparent border-b-richblack-25'></input>
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='email' className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></label>
                <input type='email' placeholder='Enter email address' id='email' name='email' value={FormData.email} onChange={changeHandler} required className='bg-richblack-800 p-[12px] rounded-md border-[1px] border-transparent border-b-richblack-25'></input>
            </div>



            <button type='submit' className='w-full mt-6 mb-4 bg-yellow-400 border rounded-md text-richblack-900 font-semibold px-[12px] py-[8px] hover:scale-95 transition-transform duration-300'>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm
import React from 'react';
import google from '../../assets/google.png';
import github from '../../assets/github.png';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='container mx-auto my-16 px-3 lg:px-52 '>
           
        <form className='border border-blue-700 rounded-lg p-6'>
            <h2 className='text-2xl text-orange-400 mb-6'>Login</h2>
        
          <div className="relative z-0 mb-6 w-full group">
              <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
              <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
              <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
         
          
        
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
          <p className='mt-2 text-sm'>Don't have an account? <Link to='/register'><span className='text-blue-600 underline'>create an account</span></Link></p>
        
        </form>
        <div className='px-3 lg:px-64'>
                            <div className=' py-5 text-center'>
                                <span className=''>------------- Or -------------</span>
                            </div>
                            <div className=''>
                                <div  className='flex justify-between items-center border p-2 rounded-full mb-3 bg-gray-600 text-white'>
                                    <img src={google} className='w-8' alt="" />
                                    <p className='pr-4'>Continue With Google</p>
                                </div>
                                <div  className='flex justify-between items-center border p-2 rounded-full bg-gray-600 text-white'>
                                    <img src={github} className='w-8 bg-white rounded-full' alt="" />
                                    <p className='pr-4'>Continue With Github</p>
                                </div>
                            </div>
                        </div>
         
                </div>
    );
};

export default Login;
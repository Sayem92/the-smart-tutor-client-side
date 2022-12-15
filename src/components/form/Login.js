import React, { useState } from 'react';
import google from '../../assets/google.png';
import github from '../../assets/github.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import toast from 'react-hot-toast';


const Login = () => {
    const { signIn, googleSignIn, githubSignIn, setUser, setLoading, resetPassword } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('')

    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

    // form submit type
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // user sign in
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('login successfully')
                form.reset()
                setError('')
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })

    }
    // user email state a add
    const handleBlurEmail = event=>{
        const email = event.target.value;
        setUserEmail(email)
        
    }

    // password reset function
    const handlePasswordReset = () => {
        if(!userEmail){
            toast('Please enter your valid email');
            return;
        }
        resetPassword(userEmail)
        .then(()=>{
            toast('Password reset email sent. Please check your email')
        })
        .catch(error=>{
            setError(error.message)
            console.log(error);
        })
    }

    // google login 
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)
                toast.success('Google login successful')
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    // github login
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)
                toast.success('Github login successful')
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))

    }


    return (
        <div className='py-16 px-3 lg:px-52 dark:bg-black'>

            <form onSubmit={handleSubmit} className='border border-blue-700 dark:border-white rounded-lg p-6'>
                <h2 className='flex justify-center text-3xl text-orange-400 dark:text-white mb-6'>Login</h2>

                <div className="relative z-0 mb-6 w-full group">
                    <input onBlur={handleBlurEmail} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>


                <p className='pb-3 text-sm dark:text-gray-400'>Forget password?<span  onClick={handlePasswordReset} className='text-blue-500 underline'> Reset Password</span></p>
                <button className="text-white dark:bg-black dark:border  bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-blue-800">Login</button>
                <p className='mt-2 text-sm dark:text-gray-400'>Don't have an account? <Link to='/register'><span className='text-blue-600 underline'>create an account</span></Link></p>
                <p className='mt-2 text-red-600 '>{error}</p>
            </form>
            <div className='px-3 lg:px-64'>
                <div className=' py-5 text-center'>
                    <span className='dark:text-gray-400'>------------- Or -------------</span>
                </div>
                <div className=''>
                    <div onClick={handleGoogleSignIn}
                        className='flex justify-between items-center border p-2 rounded-full mb-3 bg-gray-600 text-white hover:bg-gray-500'>
                        <img src={google} className='w-8' alt="" />
                        <p className='pr-4'>Continue With Google</p>
                    </div>
                    <div onClick={handleGithubSignIn}
                        className='flex justify-between items-center border p-2 rounded-full bg-gray-600 text-white hover:bg-gray-500'>
                        <img src={github} className='w-8 bg-white rounded-full' alt="" />
                        <p className='pr-4'>Continue With Github</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
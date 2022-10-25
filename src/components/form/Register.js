import React, { useState } from 'react';
import google from '../../assets/google.png';
import github from '../../assets/github.png';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import toast from 'react-hot-toast';



const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateName , googleSignIn, githubSignIn, setUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);
        if(!/[A-Z]/.test(password)){
            setError('Password at least one letter capital')
            return
        }
        if(!/[0-9]/.test(password)){
            setError('Password at least one any digit')
            return
        }

        if(password.length < 6){
            setError('Password at least six letter more')
            return
        }


        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('create an account successfully')
            form.reset()
            setError('');
            handleNameUpdate(name, photoURL)

        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        })

    }

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            setUser(user)
            toast.success('Google login successful')
        })
        .catch(error => console.log(error))
    }

    const handleGithubSignIn = () =>{
        githubSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            setUser(user)
            toast.success('Github login successful')
        })
        .catch(error => console.log(error))

    }


    const handleNameUpdate = (name, photoURL)=>{
        const profile = {displayName: name, photoURL: photoURL}
        updateName(profile)
        .then(() => { })
        .catch(error => console.error(error))
    }

    return (
        <div className='container mx-auto my-16 px-3 lg:px-52 '>

            <form onSubmit={handleSubmit} className='border border-blue-700 rounded-lg p-6'>
                <h2 className='text-2xl text-orange-400 mb-6'>Create an account</h2>

                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                </div>
                <div className="relative z-0 mb-7 w-full group">
                    <input type="text" name="photoURL" id="photoURL" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="photoURL" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PhotoURL</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>



                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
            <p className='mt-2 text-red-600 '>{error}</p>
            </form>
            <div className='px-3 lg:px-64'>
                <div className=' py-5 text-center'>
                    <span className=''>------------- Or -------------</span>
                </div>
                <div className=''>
                    <div 
                    onClick={handleGoogleSignIn}
                     className='flex justify-between items-center border p-2 rounded-full mb-3 bg-gray-600 text-white hover:bg-gray-500'>
                        <img src={google} className='w-8' alt="" />
                        <p className='pr-4'>Continue With Google</p>
                    </div>
                    <div
                        onClick={handleGithubSignIn}
                     className='flex justify-between items-center border p-2 rounded-full bg-gray-600 text-white hover:bg-gray-500'>
                        <img src={github} className='w-8 bg-white rounded-full' alt="" />
                        <p className='pr-4'>Continue With Github</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;
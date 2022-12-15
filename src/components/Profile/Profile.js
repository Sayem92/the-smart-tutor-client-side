import React, { useContext, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/UserContext/UserContext';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoURLRef = useRef(user?.photoURL)
    // console.log(name);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(photoURLRef.current.value);
        toast.success('Thank you for submitting')

    }

    const handleNameChange = (event) => {
        setName(event.target.value)
        // console.log(event.target.value);
    }

    return (
        <div className='dark:bg-black md:py-20 p-8'>
            <div className="w-full lg:w-96 mx-auto x p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100 ">

                <div className="space-y-1 text-sm">
                    <input readOnly defaultValue={user?.email} type="email" name="email" placeholder="Enter email" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <input onChange={handleNameChange} defaultValue={name ? user?.displayName : name} type="text" name="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <input ref={photoURLRef} defaultValue={user?.photoURL} type="photoURL" name="photoURL" placeholder="Enter photoURL" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                </div>
                <button onClick={handleSubmit} className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Submit</button>


            </div>
        </div>
    );
};

export default Profile;
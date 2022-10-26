import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOutPage = () => {
    const checkOutPageInfo = useLoaderData(); 
    // console.log(checkOutPageInfo);
    return (
            <div className='flex justify-center items-center m-5 lg:my-48'>
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md bg-green-400 ">
          
                <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">{checkOutPageInfo?.title}</h5>
           
            <p className="mb-3 text-xl font-normal  text-white">Thank You !</p>
            <Link to='/' className="inline-flex items-center py-2  px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-800 focus:ring-blue-800">
                Go to Home
                <FaArrowRight className='ml-2'/>
            </Link>
        </div>
        </div>

    );
};

export default CheckOutPage;
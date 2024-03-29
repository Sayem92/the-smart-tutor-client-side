import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = (props) => {
    const { id, image, title, description } = props.category;

    // category type show display  

    return (

        <div className='h-96 mb-2'>
            <div className=" p-4 mb-4 rounded-md shadow-md bg-gray-800 text-gray-50">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-40 bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold">{title}</h2>
                </div>
                <p className="text-gray-300 text-sm">{description.slice(0, 70)}...</p>

                <Link to={`/category/detailsPage/${id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 mt-6 font-semibold tracking-wide rounded-md  bg-gradient-to-r from-green-500 to-blue-500  text-white hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">Details</button>
                </Link>
            </div>
        </div>

    );
};

export default SingleCategory;
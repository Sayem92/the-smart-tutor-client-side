import React from 'react';

const Topics = (props) => {
    const {id,image, title, description} = props.tutorial;
    return (
        <div className='h-96 mb-2'>
            <div className=" p-4 mb-4 rounded-md shadow-md bg-gray-800 text-gray-50">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-40 bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold">{title}</h2>
                </div>
                <p className="text-gray-300 text-sm">{description.slice(0,65)}...</p>

                <button type="button" className="flex items-center justify-center w-full p-3 mt-6 font-semibold tracking-wide rounded-md bg-blue-500 hover:bg-blue-600 text-white">Get Started</button>
            </div>
        </div>
    );
};

export default Topics;
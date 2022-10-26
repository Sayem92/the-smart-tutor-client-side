import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const details = useLoaderData();
    // console.log(details);
    const {image, title, description, tips} = details
    return (

        <div className="lg:w-9/12 lg:p-4 mx-auto lg:my-10 pb-5  bg-gray-300">
            <div className="  ">
                <h2 className=" py-4 pl-6  font-bold text-3xl text-gray-900">{title}</h2>
                <div>
                    <img className='lg:w-96 ml-5 border' src={image} alt="Shoes" />
                    </div>
                <div className=" pl-6 my-4 pr-5">
                    <p className='text-xl'>{description}</p>
                    {
                        tips.map(tip=><li>{tip}</li>)
                    }
                    <div className="m-6 justify-center">
                        <button className="btn btn-success">Get Premium</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetailsPage;
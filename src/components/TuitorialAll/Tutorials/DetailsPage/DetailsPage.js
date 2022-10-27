import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const details = useLoaderData(); 
    const { id, image, title, description, tips } = details;

    return (

        <div className="lg:w-9/12 lg:p-4 mx-auto lg:my-10 pb-5  bg-gray-300">
            <div className="  ">
                <div className='flex justify-between items-center'>
                    <h2 className=" py-4 pl-6  font-bold text-3xl text-gray-900">{title}</h2>
                    <div className='mr-5'>
                        <Link to={''}>
                            <button className="btn btn-success hover:bg-green-600">Pdf</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img className='lg:w-96 ml-5 w-64 border' src={image} alt="" />
                </div>
                <div className=" pl-6 my-4 pr-5">
                    <p className='text-xl'>{description}</p>
                    {
                        tips.map(tip => <li key={Math.random() * 10}>{tip}</li>)
                    }
                    <div className="m-6 justify-center">
                        <Link to={`/tutorials/detailsPage/${id}`}>
                            <button className="btn btn-success hover:bg-green-500">Get Premium Access</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetailsPage;
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Topics from './Topics';



const Tutorials = () => {
    const tutorials = useLoaderData();
    
    return (
        <div>
            <Link to='/category/all'>
            <button className='flex justify-center items-center bg-orange-400 hover:bg-gray-500 rounded text-2xl  p-2 font-semibold  mt-4 text-white'>Open Category</button></Link>
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 container mx-auto mt-5">
            
                    {/* all tutorials display  */}
            
            <div className='col-span-4 '>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 p-2 '>
                    {
                        tutorials.map(tutorial=> <Topics
                            key={tutorial.id}
                            tutorial={tutorial}
                        ></Topics>)
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Tutorials;
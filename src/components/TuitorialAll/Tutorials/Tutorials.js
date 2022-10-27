import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Topics from './Topics';



const Tutorials = () => {
    const tutorials = useLoaderData();
    // console.log(tutorials);
    return (
        <div>
            <Link to='/category/all'>
            <button className='flex justify-center items-center bg-gray-700 text-2xl  p-2 font-semibold  mt-4 text-white'>Open Category</button></Link>
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 container mx-auto mt-5">

                {/* <div className="space-y-2 bg-gray-700 h-64 m-2 py-5 rounded ml-7 lg:ml-5">
                    <h2 className="text-xl font-semibold tracking-widest uppercase mb-2 text-white pl-4">Getting Started</h2>
                    <div className="flex flex-col items-start pl-4 space-y-1 text-white">
                        {
                            tutorials.map(tutorial => <Options
                                key={tutorial.id}
                                tutorial={tutorial}
                            ></Options>  )
                        }
                       
        
                    </div>
                </div> */}
            
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
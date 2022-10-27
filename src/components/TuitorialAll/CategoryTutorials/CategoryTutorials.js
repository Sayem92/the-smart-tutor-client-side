import { handler } from 'daisyui';
import React from 'react';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {  useLoaderData } from 'react-router-dom';

import SingleCategory from './SingleCategory';

const CategoryTutorials = () => {
    const [category, setCategory] = useState('')
    const allCategory = useLoaderData();
    

    const handlerCategory = (e) => {
        const name= e.target.innerText
        setCategory(name)
    }
  
    // category type value
    const newCategory = allCategory.filter(single => single?.category == category)
  

    return (
        <div>

            <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 container mx-auto mt-5">

                <div className="space-y-2 bg-gray-700 h-96 m-2 py-5 rounded ml-7 lg:ml-5">
                    <h2 className="text-xl font-semibold tracking-widest uppercase mb-2 text-orange-300 pl-4">All Category here</h2>
                    <div className="flex flex-col items-start pl-4 space-y-1 text-white">

                {/* side menu display  */}
                
                        <div onClick={handlerCategory}
                            className='flex justify-center items-center py-2 hover:text-black'>
                            <FaCheckCircle className='mr-2' />
                            <p  >Vlogging Tutorials</p>
                        </div>
                        <div onClick={handlerCategory}
                            className='flex justify-center items-center py-2 hover:text-black'>
                            <FaCheckCircle className='mr-2' />
                            <p  >Digital Marketing Tutorials</p>
                        </div>
                        <div onClick={handlerCategory}
                            className='flex justify-center items-center py-2 hover:text-black'>
                            <FaCheckCircle className='mr-2' />
                            <p  >Gaming Tutorials</p>
                        </div>
                        <div onClick={handlerCategory}
                            className='flex justify-center items-center py-2 hover:text-black'>
                            <FaCheckCircle className='mr-2' />
                            <p >Exercise Tutorials</p>
                        </div>
                        <div onClick={handlerCategory}
                            className='flex justify-center items-center py-2 hover:text-black'>
                            <FaCheckCircle className='mr-2' />
                            <p  >Cooking Tutorials</p>
                        </div>
                        <div onClick={handlerCategory}
                            className='flex justify-center items-center py-2 hover:text-black'>
                            <FaCheckCircle className='mr-2' />
                            <p  >Beauty and Fashion Tutorials</p>
                        </div>

                    </div>
                </div>

        {/* category type show display  */}

                <div className='col-span-2 '>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-2 '>
                        { category ? 
                       <> {
                            newCategory?.map(category => <SingleCategory
                                key={category.id}
                                category={category}
                            ></SingleCategory>)
                        }
                        </>
                        :
                        <>
                        {
                            allCategory?.map(category => <SingleCategory
                                key={category.id}
                                category={category}
                            ></SingleCategory>)
                        }
                        </>

                    }              
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CategoryTutorials;


import React from 'react';
import people from '../../../assets/people.png'
import course from '../../../assets/course.png'
import secure from '../../../assets/secure.png'

const AboutUS = () => {
    return (
        <div className='p-2 py-20 md:p-20 dark:bg-black'>
            <div className='text-center mb-16 space-y-4'>
                <h1 className='text-4xl text-orange-500 font-bold'>About us,</h1>
                <h1 className='text-4xl font-medium dark:text-white'>The Result of All True Learning</h1>
                <p className='text-xl dark:text-white'>A modern and Unique style</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                <div className=" dark:bg-white rounded-lg shadow-lg bg-gray-800 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className='flex justify-center mt-5'>
                        <img className="" src={people} alt="avatar" />
                    </div>
                    <div className="py-8 text-center px-14">
                        <p className="block text-xl font-bold dark:text-gray-800 text-white mb-3 " >New Tutorial</p>
                        <span className="text-lg dark:text-gray-700 text-gray-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloremque similique.</span>
                    </div>
                </div>

                <div className=" dark:bg-white rounded-lg shadow-lg bg-gray-800 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className='flex justify-center mt-5'>
                        <img src={course} alt="avatar" />
                    </div>
                    <div className="py-8 text-center px-14">
                        <p className="block text-xl font-bold dark:text-gray-800 text-white mb-3 " >Top Tutorials</p>
                        <span className="text-lg dark:text-gray-700 text-gray-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloremque similique.</span>
                    </div>
                </div>

                <div className=" dark:bg-white rounded-lg shadow-lg bg-gray-800 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className='flex justify-center mt-5'>
                        <img src={secure} alt="avatar" />
                    </div>
                    <div className="py-8 text-center px-14">
                        <p className="block text-xl font-bold dark:text-gray-800 text-white mb-3 " >Full E-books</p>
                        <span className="text-lg dark:text-gray-700 text-gray-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloremque similique.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUS;
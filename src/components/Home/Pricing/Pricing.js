import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div class="bg-white dark:bg-black pb-12">
            <div class="px-2 py-12 md:p-20">

                <div className='text-center mb-16 space-y-4'>
                    <h1 className='text-4xl dark:text-white font-bold'>Approdable <span className='text-orange-500 '>Price</span> </h1>
                    
                    <p className='text-xl dark:text-white'>A modern and Unique style</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    <div class="flex flex-col w-full max-w-md p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg  dark:bg-gray-900 dark:border-gray-700">
                        <div class="flex-shrink-0">
                            <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-orange-500 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                Casual
                            </h2>
                        </div>

                        <div class="flex-shrink-0">
                            <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                Free
                            </span>
                        </div>

                        <ul class="flex-1 space-y-4">
                            <li class="text-gray-500 dark:text-gray-400">
                                Up to 5 tutorials
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                Up to 10 collaborators
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                2Gb of storage
                            </li>
                        </ul>
                        <Link to='/tutorials'>
                        <button class="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gradient-to-r from-green-500 to-blue-500 rounded-md focus:outline-none">
                            Start free
                        </button>
                        </Link>
                    </div>

                    <div class="flex flex-col w-full max-w-md p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg  dark:bg-gray-900 dark:border-gray-700">
                        <div class="flex-shrink-0">
                            <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-orange-500 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                Professional
                            </h2>
                        </div>

                        <div class="flex-shrink-0">
                            <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                $24.90
                            </span>

                            <span class="text-gray-500 dark:text-gray-400">
                                /month
                            </span>
                        </div>

                        <ul class="flex-1 space-y-4">
                            <li class="text-gray-500 dark:text-gray-400">
                                Up to 10 tutorials
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                Up to 20 collaborators
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                10Gb of storage
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                Real-time collaborations
                            </li>
                        </ul>
                        <Link to='/tutorials'>
                        <button class="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gradient-to-r from-green-500 to-blue-500 rounded-md focus:outline-none">
                            Start free trial
                        </button>
                        </Link>
                    </div>

                    <div class="flex flex-col w-full max-w-md p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg  dark:bg-gray-900 dark:border-gray-700">
                        <div class="flex-shrink-0">
                            <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-orange-500 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                Expert
                            </h2>
                        </div>

                        <div class="flex-shrink-0">
                            <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                $49.90
                            </span>

                            <span class="text-gray-500 dark:text-gray-400">
                                /month
                            </span>
                        </div>

                        <ul class="flex-1 space-y-4">
                            <li class="text-gray-500 dark:text-gray-400">
                                Unlimited tutorials
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                Unlimited collaborators
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                Unlimited storage
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                Real-time collaborations
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                24x7 Support
                            </li>
                        </ul>

                        <Link to='/tutorials'>
                        <button class="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gradient-to-r from-green-500 to-blue-500 rounded-md focus:outline-none">
                            Start free trial
                        </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;
import React from 'react';

const Statistic = () => {
    return (
        <div className="px-2 pb-20 mx-auto sm:max-w-xl md:max-w-full md:px-20 lg:px-18 dark:bg-black">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 rounded-md text-center dark:bg-white bg-black hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                            stroke="#334CFF"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="text-4xl font-bold text-[#334CFF]">
                        819
                    </h6>
                    <p className="mb-2 font-bold text-lg text-gray-200 dark:text-gray-700">Downloads</p>
                    <p className="text-gray-200 dark:text-gray-700">
                        It’s something that’s many of the wisest people in history have kept
                        in mind.
                    </p>
                </div>
                <div className="p-4 rounded-md text-center dark:bg-white bg-black hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                            stroke="#334CFF"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="text-4xl font-bold text-[#334CFF]">
                        1.3K
                    </h6>
                    <p className="mb-2 font-bold text-lg text-gray-200 dark:text-gray-700">Users</p>
                    <p className="text-gray-200 dark:text-gray-700">
                        For many men, the acquisition of wealth does not end their troubles,
                        it only changes them.
                    </p>
                </div>
                <div className="p-4 rounded-md text-center dark:bg-white bg-black hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                            stroke="#334CFF"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="text-4xl font-bold text-[#334CFF]">91</h6>
                    <p className="mb-2 font-bold text-lg text-gray-200 dark:text-gray-700">Subscribers</p>
                    <p className="text-gray-200 dark:text-gray-700">
                        It's a helluva start, being able to recognize what makes you happy
                        today, in this moment.
                    </p>
                </div>
                <div className="p-4 rounded-md text-center dark:bg-white bg-black hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                            stroke="#334CFF"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="text-4xl font-bold text-[#334CFF]">52</h6>
                    <p className="mb-2 font-bold text-lg text-gray-200 dark:text-gray-700">Tutorials</p>
                    <p className="text-gray-200 dark:text-gray-700">
                        Happiness is when what you think, what you say, and what you do are
                        in harmony.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Statistic;
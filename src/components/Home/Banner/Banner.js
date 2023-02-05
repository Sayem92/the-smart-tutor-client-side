import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/bJ8K2vL/victoria-heath-MAGAXAYq-NE-unsplash.jpg")` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to <span className='text-orange-500'>The Smart Tutor</span> </h1>
                        <p className="mb-5"> A tutorial is a teaching session given to one student or a small group of students. If you are stuck in a class, you could use a tutorial. Teachers lead classes, but tutors are educators who also help students, usually one-on-one. Tutors don't give grades: they just try to help or coach students.</p>
                        <Link to='/tutorials'> <button className="btn bg-gradient-to-r from-green-500 to-blue-500 rounded-md hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
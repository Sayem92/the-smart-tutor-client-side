import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const DetailsPage = () => {
    const details = useLoaderData();
    const { id, image, title, description, tips } = details;


    return (
        <div className="dark:bg-black md:py-10">
        <div ref={ref} className="lg:w-9/12 lg:p-4 mx-auto pb-5  bg-gray-300 rounded-lg">
            <div  className="  ">
                <div className='flex justify-between items-center'>
                    <h2 className=" py-4 pl-6  font-bold text-3xl text-gray-900 ">{title}</h2>
                    <div className='mr-5'>

                        <Pdf targetRef={ref}  x={3} y={1} scale={0.7} filename="tutorial-example.pdf">

                            {({ toPdf }) => <button
                             onClick={toPdf} 
                             className="btn btn-success hover:bg-green-500  ">Pdf</button>}
                        </Pdf>
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
                            <button className="btn border-none bg-gradient-to-r from-green-500 to-blue-500 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">Get Premium Access</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
};

export default DetailsPage;
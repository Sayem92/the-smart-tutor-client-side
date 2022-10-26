import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Options = ({tutorial}) => {
    return (
        <div>
              <div className='flex justify-center items-center'>
                             <FaCheckCircle className='mr-2'/>
                            <Link rel="noopener noreferrer" to="/"> {tutorial?.title}</Link>
                                </div>
        </div>
    );
};

export default Options;
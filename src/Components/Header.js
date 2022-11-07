import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo/wishr-log.png';
const Header = () => {
    return (
        <div className='py-2'>
            <div className='w-full md:w-10/12 mx-auto flex justify-between items-center'>
                <img src={logo} alt='' />
                <div className='flex gap-5 items-center'>
                    <ul className='md:flex gap-5 font-semibold'>
                        <li className='hover:text-wishr'><Link to='/'>Home</Link></li>
                        <li className='hover:text-wishr'><Link to='/donation'>Donation</Link></li>
                        <li className='hover:text-wishr'><Link to='/events'>Events</Link></li>
                        <li className='hover:text-wishr'><Link to='/login'>Login</Link></li>
                    </ul>
                    <button className='wishr-btn'>Donate</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
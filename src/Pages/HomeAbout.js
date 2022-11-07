import React from 'react';
import about from '../assests/donation-to-child-education.jpg'
import {GiReceiveMoney}  from 'react-icons/gi'
import {FaPeopleCarry, FaHandHoldingHeart} from 'react-icons/fa'
const HomeAbout = () => {
    return (
        <div className='w-10/12 mx-auto my-5 flex gap-6 items-center'>
            <div className='w-2/4 relative'>
                <img src={about} alt='' className='rounded-2xl'/>
                <h3 className='text-white text-3xl font-semibold bg-wishr2nd p-5 flex gap-2 rounded-full absolute top-5 left-5 items-center'><GiReceiveMoney className='h-12 w-12'></GiReceiveMoney> We have Raised <br/>25K Dollers</h3>
            </div>
            <div className='w-2/4 flex gap-5'>
                <div className='w-3/5'>
                    <h1 className='text-4xl font-bold'>Here to Bring<br/> People together<br/> to Help</h1>
                    <p className='text-lg font-semibold my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid eveniet iure. Laudantium error quae saepe, hic vel laboriosam veniam, aspernatur atque quibusdam suscipit deleniti quo asperiores.</p>
                    <button className='wishr-btn-outline'>Read More</button>
                </div>
                <div className='w-2/5'>
                    <div className='bg-white shadow-xl rounded-xl px-5 py-12 flex flex-col items-center justify-between mb-5'>
                        <FaPeopleCarry className='h-14 w-14 text-wishr2nd'></FaPeopleCarry>
                        <h2 className='text-center text-2xl font-bold'><span className='text-wishr text-3xl'>290</span><br/>Volunteers</h2>
                    </div>
                    <div className='bg-white shadow-xl rounded-xl px-5 py-12 flex flex-col items-center justify-between'>
                        <FaHandHoldingHeart className='h-14 w-14 text-wishr2nd'></FaHandHoldingHeart>
                        <h2 className='text-center text-2xl font-bold'><span className='text-wishr text-3xl'>7.8K</span><br/>Beneficiaries</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
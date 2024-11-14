import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {


    return (

        <div className='px-3 py-1 bg-pink-300 w-full flex items-center justify-between navbar mb-4'>
            <div className='flex gap-2 justify-between w-[75%]'>
                <Link to={''}>
                    <h1 className='text-3xl font-semibold'>Estatery</h1>
                </Link>
                <ul className='md:flex justify-between gap-2 font-semibold hidden items-center text-[1.1rem]'>
                    <li>Rent</li>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>Manage Property</li>
                    <li>Resources</li>
                </ul>
            </div>

            <div className='flex gap-2'>
                {/* <button>Login</button>
                <button>Signup</button> */}
                <Link to={'/favourites'}>
                    <button className='p-2 bg-red-500 rounded-lg font-semibold text-white'>Favourites</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav

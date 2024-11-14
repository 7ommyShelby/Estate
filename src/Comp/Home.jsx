import React from 'react'
import Nav from './Nav'
import Filter from './Filter'
import { Outlet } from 'react-router-dom'


const Home = () => {

    return (
        <>
            <main className='bg-pink-200 min-h-screen h-fit w-full'>
                <Nav />
                <Filter />
                <Outlet />

            </main>
        </>
    )
}

export default Home

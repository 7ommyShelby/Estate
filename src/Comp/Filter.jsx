import React, { useContext, useState } from 'react'
import { UserContext } from '../PropertyContext';

const Filter = () => {

    const { filter, setFilter } = useContext(UserContext);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFilter((prev) => {
            return { ...prev, [name]: value }
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    console.log(filter);

    return (

        <div className='m-2 flex flex-col items-center'>
            <h1 className='font-bold text-3xl m-3'>Search property for rent</h1>

            <form onSubmit={handleSubmit} className='flex md:flex-row w-full md:items-center lg:w-3/4 flex-col justify-evenly bg-white p-2 gap-2' action="">

                <div className='flex gap-1 w-full flex-col text-center'>
                    <label className='font-semibold' htmlFor="">City</label>
                    <input onChange={handleChange} name='city' className='bg-pink-300 rounded-md px-1' type="text" />
                </div>

                <div className='flex gap-1 w-full flex-col text-center'>
                    <label className='font-semibold' htmlFor="">Date of visit</label>
                    <input className='bg-pink-300 rounded-md px-1' type="date" name="date" id="" onChange={handleChange} />
                </div>

                <div className='flex gap-1 w-full flex-col text-center'>
                    <label className='font-semibold' htmlFor="">Price</label>
                    <select className='bg-pink-300 rounded-md px-1' name="price" id="" onChange={handleChange}>
                        <option value="0-1000">0-1000</option>
                        <option value="1000-1500">1000-1500</option>
                        <option value="1500-2000">1500-2000</option>
                        <option value="2000-3000">2000-3000</option>
                        <option value="3000-5000">3000-5000</option>
                    </select>
                </div>

                <div className='flex gap-1 w-full flex-col text-center'>
                    <label className='font-semibold' htmlFor="">Property Type</label>
                    <select className='bg-pink-300 rounded-md px-1' name="type" id="" onChange={handleChange}>
                        <option value="All">All</option>
                        <option value="house">House</option>
                        <option value="Villa">Villa</option>
                        <option value="pg">Paying Guest</option>
                        <option value="oyo">OYO</option>
                        <option value="farm-house">Farm house</option>
                        <option value="Hotel">Hotel</option>
                    </select>
                </div>

                {/* <button className='bg-violet-400 px-4 py-1 font-semibold rounded-lg'>Search</button> */}

            </form>

        </div>

    )
}

export default Filter

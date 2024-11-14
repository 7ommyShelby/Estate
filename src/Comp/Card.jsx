import React, { useContext, useEffect, useState } from 'react'
import { FavouriteContext, UserContext } from '../PropertyContext'

const Card = ({ addFav, name, city, address, type, info, image, cost }) => {


    const { estate } = useContext(UserContext);
    const { favour } = useContext(FavouriteContext);

    const [duped, setDuped] = useState(false);

    const check = () => {

        const data = favour.find((e) => e.name === name);

        if (data) {
            setDuped(true);
        } else {
            setDuped(false);
        }

    }

    useEffect(() => {
        check();
    }, [favour])


    return (
        <>
            <div className='w-96 bg-neutral-400 border border-indigo-800 rounded-t-lg p-2'>
                <div className='w-full h-[200px] rounded-lg overflow-hidden'>
                    <img className='h-full w-full object-cover object-center' src={image} alt="" />
                </div>

                <div className=' p-2'>
                    <div className='flex justify-between'>
                        <h1 className='uppercase font-semibold'>{type.split("All")[1]}</h1>
                        <button onClick={() => { addFav(name) }} className='bg-green-500 px-2 py-1 rounded-md font-semibold'>{duped ? "Remove" : "Add"}</button>
                    </div>
                    <div>
                        <h3>{address} {city}</h3>
                        <h3>Rs {cost}/Day</h3>
                    </div>
                </div>

                <div className='bg-neutral-200 rounded-md flex justify-evenly p-2'>

                    <div>
                        <p>Area</p>
                        <p>{info.area}</p>
                    </div>
                    <div>
                        <p>Bed</p>
                        <p>{info.bed}</p>
                    </div>
                    <div>
                        <p>Bathroom</p>
                        <p>{info.bathrooms}</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Card

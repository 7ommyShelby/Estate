import React, { useContext } from 'react'
import { FavouriteContext, UserContext } from '../PropertyContext'
import Card from './Card';

const Favourites = () => {

    const { estate } = useContext(UserContext);
    const { favour, setFavour } = useContext(FavouriteContext);

    const addFav = (name) => {

        const fav = estate.find((e) => e.name === name);

        const duplicate = favour.find((e) => e.name === name);

        duplicate ? setFavour((prev) => {
            return prev.filter((e) => e.name != name)
        }) :
            setFavour((prev) => {
                return [...prev, fav]
            })
    }


    return (
        <>
            <div className='res h-[100%] flex p-2 flex-wrap gap-2 mt-3 justify-evenly'>

                {
                    favour.length > 0 ?
                        favour.map((e) => {
                            return (
                                <>
                                    <Card
                                        addFav={() => { addFav(e.name) }}
                                        name={e.name}
                                        city={e.city}
                                        image={e.image}
                                        info={e.info}
                                        cost={e.price}
                                        type={e.type}
                                        address={e.address}
                                    />
                                </>
                            )
                        }) :
                        <div className='text-center'>
                            <p className='font-semibold text-2xl'>Oops no data...🙄</p>
                        </div>
                }
            </div>
        </>
    )
}

export default Favourites

import React, { useContext } from 'react'
import { FavouriteContext, UserContext } from '../PropertyContext'
import Card from './Card';

const Results = () => {

    const { estate, filter } = useContext(UserContext);

    const filteredResults = estate.filter(item => {
        return (
            (filter.city ? item.city === filter.city.toUpperCase() : true) &&
            // (filter.date ? item.date === filter.date : true) &&
            (filter.price ? item.price <= Number(filter.price.split("-")[1]) && item.price > Number(filter.price.split("-")[0]) : true) &&
            (filter.type ? item.type.split(" ")[1] === filter.type.toLowerCase() || filter.type === "All" : true)
        );
    });

    console.log(estate, filter);

    // const { estate } = useContext(UserContext);

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

    console.log(favour);


    return (

        <>
            <div className='res h-[100%] flex p-2 flex-wrap gap-2 mt-3 justify-evenly'>
                {
                    filteredResults.length > 0 ?
                        filteredResults.map((e) => {
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
                        }) : <>
                            <div className='content-center h-[100%]'>
                                <p className='font-semibold text-2xl'>No Results...</p>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default Results;

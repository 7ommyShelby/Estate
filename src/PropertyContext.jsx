import { createContext, useState } from "react";
import { data } from '../data';

const UserContext = createContext(null);
const FavouriteContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [estate, setEstate] = useState(data);
    const [favour, setFavour] = useState([]);
    const [filter, setFilter] = useState({
        city: "",
        date: "",
        price: "",
        type: "",
    })

    return (
        <UserContext.Provider value={{ estate, filter, setFilter }}>
            <FavouriteContext.Provider value={{ favour, setFavour }}>
                {children}
            </FavouriteContext.Provider>
        </UserContext.Provider>
    );
}


export { UserContext, FavouriteContext };
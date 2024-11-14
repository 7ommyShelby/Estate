import { useContext } from 'react'
import './App.css'
import { UserContext } from './PropertyContext'
import { Route, Routes } from 'react-router-dom';
import Home from './Comp/Home';
import Results from './Comp/Results';
import Favourites from './Comp/Favourites';


function App() {


  return (

    <>
      {/* <Nav /> */}
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='' element={<Results />} />
          <Route path='favourites' element={<Favourites />} />
        </Route>
      </Routes>
    </>

  )
}

export default App

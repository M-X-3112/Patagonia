import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout/Layout'
import Order from './components/Order'
import GiftCard from './components/GiftCard'
import Planet from './components/Planet'
import Events from './components/Events'
import Location from './components/Location'
import HomePage from './components/HomePage'
import scrollTop from './utils/scrollTop'
import Books from './components/Books'
import Gears from './components/Gears'
import Kids from './components/Kids'
import KidsCategory from './components/KidsCategory'
import Womens from './components/Womens'
import WCategory from './components/WCategory'
import Mens from './components/Mens'
import MCategory from './components/MCategory'
import BestSeller from './components/BestSeller'
import Error from './components/Error'
import Skiing from './components/Skiing'
import Climbing from './components/Climbing'
import Running from './components/Running'
import Login from './components/Login'
import SignUp from './components/SignUp'
import BasketMenu from './components/BasketMenu'
import WishList from './components/WishList'
import Jackets from './components/Jackets'
import Tops from './components/Tops'
import Bottoms from './components/Bottoms'
import Accesories from './components/Accesories'
import Socks from './components/Socks'
import BookId from './components/BookId'
import GearId from './components/GearId'
import BestId from './components/BestId'
import MenID from './components/MenID'
import WomenID from './components/WomenID'
import KidsID from './components/KidsID'
import SocksID from './components/SocksID'
import HatsID from './components/HatsID'
import BottomsID from './components/BottomsID'
import TopID from './components/TopID'
import JacketsID from './components/JacketsID'

function App() {
  const {pathname} = useLocation()
  scrollTop(0, pathname)
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route  path='location' element={<Location />} />
              <Route  path='jackets' element={<Jackets />} />
              <Route  path='jackets/:idb' element={<JacketsID />} />
              <Route  path='tops' element={<Tops />} />
              <Route  path='tops/:idb' element={<TopID />} />
              <Route  path='bottoms' element={<Bottoms />} />
              <Route  path='bottoms/:idb' element={<BottomsID />} />
              <Route  path='accesories' element={<Accesories />} />
              <Route  path='accesories/:idb' element={<HatsID />} />
              <Route  path='socks' element={<Socks />} />
              <Route  path='socks/:idb' element={<SocksID />} />
              <Route  path='wishlist' element={<WishList />} />
              <Route  path='basketmenu' element={<BasketMenu />} />
              <Route  path='order' element={<Order />} />
              <Route  path='giftcard' element={<GiftCard />} />
              <Route  path='login' element={<Login />} />
              <Route  path='signup' element={<SignUp />} />
              <Route  path='planet' element={<Planet />} />
              <Route  path='events' element={<Events />} />
              <Route  path='gears' element={<Gears />} />
              <Route  path='gears/:idb' element={<GearId />} />
              <Route  path='skiing' element={<Skiing />} />
              <Route  path='climbing' element={<Climbing />} />
              <Route  path='running' element={<Running />} />
              <Route  path='bestSeller' element={<BestSeller />} />
              <Route  path='bestSeller/:idb' element={<BestId />} />
              <Route  path='books' element={<Books />}  />
              <Route  path='books/:idb' element={<BookId />}  />
              <Route  path='kids' element={<Kids />} >
                <Route  path=':category' element={<KidsCategory />} />
                <Route  path=':category/:idb' element={<KidsID />} />
              </Route >
              <Route  path='women' element={<Womens />} >
                <Route  path=':categoryw' element={<WCategory />} />
                <Route  path=':categoryw/:idb' element={<WomenID />} />
              </Route >
              <Route  path='men' element={<Mens />} >
                <Route  path=':categorym' element={<MCategory />} />
                <Route  path=':categorym/:idb' element={<MenID />} />
              </Route >
              <Route  path='*' element={<Error />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
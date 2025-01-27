import React, { useContext } from 'react'
import "../Css/hd.css"
import { FaRegHeart } from 'react-icons/fa6'
import { HiOutlineMenuAlt4, HiOutlineShoppingBag } from 'react-icons/hi'
import { IoIosSearch } from 'react-icons/io'
import { LuUser } from 'react-icons/lu'
import { VisibleContext } from '../Layout/Layout'
import { Link } from 'react-router-dom'
import logo from "../../public/images/Patagonia-Logo.png";

function HeaderDown() {
  const {setVisible2,setVisible3, visible2,visible3,visible4, setVisible4,visible5, setVisible5, visible6, setVisible6} = useContext(VisibleContext)
  return (
    <div className='header-down'>
      <div className='down-left'>
        <HiOutlineMenuAlt4 id='dl-1' onClick={()=> setVisible3(!visible3)} />  
        <ul className='menu-down'>
            <li><span className='link-hd' onClick={()=> setVisible4(!visible4)}>Shop</span></li>
            <li><span onClick={()=> setVisible5(!visible5)} className='link-hd'>Activism</span></li>
            <li><span onClick={()=> setVisible6(!visible6)} className='link-hd'>Stories</span></li>
        </ul>
      </div>
      <div className='logo'><Link to={"/"}><img src={logo} /></Link></div> 
      <div className='down-right'>
        <Link to={'/login'} className='d-d-d'><LuUser id='dr-2' /></Link>
        <Link to={'/wishlist'} className='d-d-d'><FaRegHeart id='dr-3' /></Link>
        <Link to={'/basketmenu'} className='d-d-d'><HiOutlineShoppingBag id='dr-4' /></Link>
        <HiOutlineMenuAlt4 id='dr-5' onClick={()=> setVisible2(!visible2)} />
      </div>
  </div>
  )
}

export default HeaderDown
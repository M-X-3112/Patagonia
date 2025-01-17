import React, { useContext, useEffect, useState } from 'react'
import '../Css/ht.css'
import { FaLocationDot } from 'react-icons/fa6'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { VisibleContext } from '../Layout/Layout'

function HeaderTop() {
  const {setVisible, visible} = useContext(VisibleContext)
    const [changer, setChanger] = useState("Earth Is Now Our Only Shareholder")
    useEffect(() => {
        const messages = [
        "Earth Is Now Our Only Shareholder",
        "Free Shipping on Orders Over $99",
        "The 2024 Gift Guide",
        ];
        let index = 0;
        const interval = setInterval(() => {
        index = (index + 1) % messages.length;
        setChanger(messages[index]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    const openPopUp = () => {
      setVisible(!visible);
      document.querySelector('.text-pop-up').style.animationName = "exam"
    }
  return (
    <div className='header-top'>
        <ul className='menu-black'>
            <li style={{borderBottom:"1px solid #fff",padding:"3px 0"}}><a href='#'>Patagonia</a></li>
            <li><a href='https://wornwear.patagonia.com/' target='_blank'>Worn Wear</a></li>
            <li><a href='https://www.patagoniaprovisions.com/' target='_blank'>Food + Drink</a></li>
            <li><a href='https://www.patagonia.com/actionworks/' target='_blank'>Take Action</a></li>
        </ul>
        <span className='span-top' onClick={openPopUp}>{changer}<TiArrowSortedDown style={{margin:"0 5px"}} /></span>
        <span className='location-map'><Link to="/location">Find a Store <FaLocationDot style={{margin:"0 5px"}} /></Link></span>
    </div>
  )
}

export default HeaderTop
import React, { useContext, useEffect } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import "../Css/leftslidemenu.css"
import { Link } from 'react-router-dom'
import { VisibleContext } from '../Layout/Layout'

function LeftSlideMenu() {
    const { visible4, close4 } = useContext(VisibleContext);
  return (
    <div className={`left-slide-main ${!visible4 && "left-hidden"}`}>
        <div className='left-x-button'><ImCancelCircle style={{fontSize:'2rem'}} onClick={()=> close4(false)} /></div>
        <div className='left-menu'>
            <ul className='left-ull'>
                    <li><Link className='left-link-f' to={"/bestSeller"} onClick={()=> close4(false)}>Best Sellers</Link></li>
                    <li><Link className='left-link-f' to={"/men"} onClick={()=> close4(false)}>Men's</Link></li>
                    <li><Link className='left-link-f' to={"/women"} onClick={()=> close4(false)}>Women's</Link></li>
                    <li><Link className='left-link-f' to={"/kids"} onClick={()=> close4(false)}>Kid's & Baby</Link></li>
                    <li><Link className='left-link-f' to={"/gears"} onClick={()=> close4(false)}>Gears</Link></li>
                    <li><Link className='left-link-f' to={"/books"} onClick={()=> close4(false)}>Books</Link></li>
                    <li><Link className='left-link-f' target='_blank' to="https://www.patagoniaprovisions.com/?utm_source=patagonia.com&utm_medium=referral&utm_campaign=global_nav" onClick={()=> close4(false)}>Food & Drinks</Link></li>
                    <li><Link className='left-link-f' target='_blank' to="https://wornwear.patagonia.com/?utm_source=ecomm&utm_medium=internal&utm_campaign=global_nav_L1" onClick={()=> close4(false)}>Shop Used</Link></li>
                    <li><Link className='left-link-f' to={"/giftcard"} onClick={()=> close4(false)}>Gift Cards</Link></li>
                    <li><Link className='left-link-f' to={"/events"} onClick={()=> close4(false)}>Events</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default LeftSlideMenu
import React, { useContext, useEffect } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import "../Css/leftslidemenu.css"
import { Link } from 'react-router-dom'
import { VisibleContext } from '../Layout/Layout'

function Activism() {
    const { visible5, close5 } = useContext(VisibleContext);
  return (
    <div className={`left-slide-main ${!visible5 && "left-hidden"}`}>
        <div className='left-x-button'><ImCancelCircle style={{fontSize:'2rem'}} onClick={close5} /></div>
        <div className='left-menu'>
            <ul className='left-ull'>
                    <li><Link className='left-link-f' to={"/skiing"} onClick={close5}>Skiing & Snowboarding</Link></li>
                    <li><Link className='left-link-f' to={"/climbing"} onClick={close5}>Climbing</Link></li>
                    <li><Link className='left-link-f' to={"/running"} onClick={close5}>Trail Running</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Activism
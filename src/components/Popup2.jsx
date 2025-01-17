import React, { useContext } from 'react'
import { IoIosSearch } from 'react-icons/io'
import "../Css/popup2.css"
import { MdArrowOutward, MdCancel } from 'react-icons/md'
import { VisibleContext } from '../Layout/Layout'
import { Link } from 'react-router-dom'

function Popup2() {
    const {visible2, close2} = useContext(VisibleContext)
  return (
    <div className={`popup-2 ${!visible2 && "hidden"}`}>
        <div className="up-menu ${}">
            <div className="left">
                <span><Link to={"/login"} onClick={close2} style={{textDecoration:'none', color:"initial"}}>Log in</Link></span>
                <span><p>English</p><img src="./src/images/footerimg/US.svg" alt="English" /></span>
            </div>
            <div className="right">
                <MdCancel onClick={close2} style={{margin:'0 40px 0 10px',color:"#333",fontSize:"2rem",cursor:'pointer'}} />
            </div>
        </div>
        <div className='down-menu'>
            <div className='section'>
                <h4>Company</h4>
                <div className="links">
                    <a href="https://www.patagonia.com/climate-goals/">Climate Goals</a>
                    <a href="https://www.patagonia.com/business-unusual/">Business Unusual</a>
                    <a href="https://www.patagonia.com/our-footprint/">Our Footprint</a>
                    <a href="https://www.patagonia.com/films/">Patagonia Films</a>
                    <Link to={'/planet'} onClick={close2}>1% for the Planet</Link>
                    <a href="https://www.patagonia.com/stories/our-acknowledgment/story-91580.html">Our Acknowledgment</a>
                    <a href="https://www.patagonia.com/how-we-fund/">How We Fund</a>
                    <Link to={"/*"} onClick={close2}>Careers</Link>
                    <a href="https://www.patagoniaworks.com/">Press</a>
                </div>
            </div>
            <div className='section'>
                <h4>Customer Service</h4>
                <div className="links">
                    <a href="https://help.patagonia.com/s/">Help Center</a>
                    <Link to={"/order"} onClick={close2}>Order Status</Link>
                    <a href="https://www.patagonia.com/returns.html">Returns & Exchanges</a>
                    <a href="https://www.patagonia.com/repairs/">Product Care & Repair</a>
                    <a href="https://help.patagonia.com/s/article/Ironclad-Guarantee">Ironclad Guarantee</a>
                    <a href="https://www.patagonia.com/pro/">Pro Program</a>
                    <Link to={"/location"} onClick={close2}>Find a Store</Link>
                    <a href="https://www.patagonia.com/group-sales/">Group Sales</a>
                </div>
            </div>
            <div className='section'>
                <div className='s1'>
                    <div className='link-hover'>
                        <a href='https://www.patagoniaprovisions.com/' target='_blank'>Shop Food</a>
                        <MdArrowOutward className='arw-up' />
                    </div>
                </div>
                <div className='s2'>
                    <div className='link-hover'>
                        <a href='https://www.patagonia.com/actionworks/' target='_blank'>Take Action</a>
                        <MdArrowOutward className='arw-up' />
                    </div>
                </div>
                <div className='s3'>
                    <div className='link-hover'>
                        <a href='https://wornwear.patagonia.com/' target='_blank'>Shop Used Gear</a>
                        <MdArrowOutward className='arw-up' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popup2
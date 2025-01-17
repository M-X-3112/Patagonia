import React, { useContext, useState } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import { IoIosArrowUp } from 'react-icons/io'
import { MdArrowOutward } from 'react-icons/md'
import "../Css/slideMenu.css"
import { VisibleContext } from '../Layout/Layout'
import { Link } from 'react-router-dom'

function SlideMenu() {
    const {visible3,close3} = useContext(VisibleContext)
    const [check, setCheck] = useState(true)
    const [check2, setCheck2] = useState(true)
    const collect = () => {
        document.querySelector(".ul").style.display = "none"
        setCheck(!check)
    }
    const collect2 = () => {
        document.querySelector("#ul").style.display = "none"
        setCheck2(!check2)
    }
  return (
    <div className={`slide-main ${!visible3 && "hidden"}`}>
        <div className='x-button'><ImCancelCircle onClick={close3} style={{fontSize:'2rem'}} /></div>
        <div className='menu'>
            <div className='menu-top'>
                <Link to={"/women"} onClick={close3}>Women's</Link>
                <Link to={"/men"} onClick={close3}>Men's</Link>
                <Link to={"/kids"} onClick={close3}>Kids' & Baby</Link>
                <Link to={"/gears"} onClick={close3}>Packs & Gear</Link>
                <Link to={"/bestSeller"} onClick={close3} style={{color:'orangered'}}>Best Sellers</Link>
            </div>
            <div className='menu-center'>
                <Link to={"/skiing"} onClick={close3}>Skiing & Snowboarding</Link>
                <Link to={"/climbing"} onClick={close3}>Climbing</Link>
                <Link to={"/running"} onClick={close3}>Trail Running</Link>
            </div>
            <div className='menu-center-little'>
                <Link to={"/books"} onClick={close3}>Books</Link>
                <Link href="https://www.patagoniaprovisions.com/?utm_source=patagonia.com&utm_medium=referral&utm_campaign=global_nav" onClick={close3} target='_blank'>Food + Drinks</Link>
                <a href="https://wornwear.patagonia.com/?utm_source=ecomm&utm_medium=internal&utm_campaign=global_nav_L1" onClick={close3} target='_blank'>Shop Used</a>
                <Link to={"/giftcard"} onClick={close3}>Gift Cards</Link>
                <Link to={"events"} onClick={close3}>Events</Link>
            </div>
            <div className="menu-bottom">
                <hr />
                <Link to={"/login"} onClick={close3} style={{margin:"10px 0"}}>Login</Link>
                <hr />
                <span href="#" onClick={collect} style={{color:"orangered"}}>Company <IoIosArrowUp className={`up-b ${!check ? 'rotated' : ''}`}  style={{transition:".5s"}} /></span>
                <ul className='ul' style={{ display: check ? 'block' : 'none'}}>
                    <li><a to={"/planet"} onClick={close3}>1% for the Planet</a></li>
                    <li><a href="https://www.patagonia.com/stories/our-acknowledgment/story-91580.html" target='_blank'>Our Acknowledgment</a></li>
                    <li><a href="https://careers.patagonia.com/us/en" target='_blank'>Careers</a></li>
                    <li><a href="https://www.patagoniaworks.com/#index" target='_blank'>Press</a></li>
                </ul>
                <hr />
                <span href="#" onClick={collect2} style={{color:"orangered"}}>Customer Service <IoIosArrowUp className={`up-b ${!check2 ? 'rotated' : ''}`}  style={{transition:".5s"}}  /></span>
                <ul id='ul' style={{ display: check2 ? 'block' : 'none',}}>
                    <li><a href="https://help.patagonia.com/s/" target='_blank'>Help Center</a></li>
                    <li><Link to={'/order'} onClick={close3}>Order Status</Link></li>
                    <li><a href='https://www.patagonia.com/returns.html' target='_blank' onClick={close3}>Returns & Exchanges</a></li>
                    <li><a href='https://www.patagonia.com/repairs/' target='_blank' onClick={close3}>Product Care & Repair</a></li>
                    <li><a href="https://www.patagonia.com/pro/" target='_blank' onClick={close3}>Pro Program</a></li>
                    <li><Link to={'/location'} onClick={close3}>Find a Store</Link></li>
                    <li><a href="https://www.patagonia.com/group-sales/" onClick={close3}>Group Sales</a></li>
                </ul>
                <hr />
                <span className='english'><p>English</p><img src="./src/images/footerimg/US.svg" alt="English" /></span>
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
    </div>
  )
}

export default SlideMenu
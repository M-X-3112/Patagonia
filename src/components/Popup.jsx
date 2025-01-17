import React, { useContext } from 'react'
import { GiCancel } from 'react-icons/gi'
import "../Css/popup.css"
import { VisibleContext } from '../Layout/Layout'

function Popup() {
    const {visible,close} = useContext(VisibleContext)
  return (
    <div className={`pop-up ${!visible ? 'hidden' : ''}`}>
        <GiCancel style={{fontSize:"2.5rem", cursor:"pointer",margin:'10px'}} onClick={close} />
        <div className="text-pop-up">
            <div className="text-one">
                <h5>Earth Is Now Our Only Shareholder</h5>
                <p>If we have any hope of a thriving planet—much less a business—it is 
                    going to take all of us doing what we can with the resources we have. 
                    This is what we can do.</p>
                <a href="https://www.patagonia.com/ownership/" target='_blank'>Read Yvon's Letter</a>
            </div>
            <div className="text-one">
                <h5>Free Shipping on Orders Over $99</h5>
                <p>Orders are shipped within 1-2 business days and arrive within 3-10 
                    business days. Need it sooner? Concerned about the environmental impact? 
                    Flexible shipping options are available.</p>
                <a href="https://help.patagonia.com/s/" target='_blank'>More Details</a>
            </div>
            <div className="text-one">
                <h5>The 2024 Gift Guide</h5>
                <p>Bottomless turns, perfect waves, alpine sleepovers, hundred-mile views: The
                     best gifts are for outside the box. Give gear that will stick with them for 
                     a long time, whether they measure the years in miles, feet, storms or sunrises.</p>
                <a href="https://help.patagonia.com/s/topic/0TO1L0000002yy9WAA/gift-cards-merchandise-credits" target='_blank'>Explore Gift Guide</a>
            </div>
        </div>
    </div>
  )
}

export default Popup
import React, { useContext, useEffect } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import "../Css/leftslideMenu.css"
import { Link } from 'react-router-dom'
import { VisibleContext } from '../Layout/Layout'

function StoriesMenu() {
    const { visible6, close6 } = useContext(VisibleContext);
  return (
    <div className={`left-slide-main ${!visible6 && "left-hidden"}`}>
        <div className='left-x-button'><ImCancelCircle style={{fontSize:'2rem'}} onClick={close6} /></div>
        <div className='left-menu'>
            <ul className='left-ull'>
                    <li><Link className='left-link-f' to={"https://www.patagonia.com/ownership/"} target='_blank' onClick={close6}>A letter from Yvon Choinard</Link></li>
                    <li><Link className='left-link-f' to={"https://www.patagonia.com/stories/riding-out-the-storm/story-156513.html"} target='_blank' onClick={close6}>Riding Out the Storm</Link></li>
                    <li><Link className='left-link-f' to={"https://www.patagonia.com/stories/field-notes-from-a-gear-tester/story-155802.html"} target='_blank' onClick={close6}>Field Notes from a Gear Tester</Link></li>
                    <li><Link className='left-link-f' to={"https://www.patagonia.com/stories/riders-of-the-night/story-156320.html"} target='_blank' onClick={close6}>Riders of the Night</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default StoriesMenu
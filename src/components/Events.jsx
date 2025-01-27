import React from 'react'
import "../Css/events.css"
function Events() {
  const changeEvent = () => {
    document.querySelector(".event-p3").innerHTML = "No results"
  }
  return (
    <div className='event-main'>
        <img src="./public/images/events.png" alt="events-foto" className='event-foto' />
        <h1>Patagonia Events</h1>
        <p className='event-p1'>Explore events both in and outside of our stores with local nonprofits, films and other ways to connect through the power of sport, community and nature.</p>
        <div className='dropdown-event'>
            <select onChange={changeEvent}>
                <option>All Events</option>
                <option>Closest to you</option>
                <option>Activism</option>
                <option>Books</option>
                <option>Climb</option>
            </select>
            <div>
                <input type="text" placeholder='Search Events' />
                <button>Search</button>
            </div>
        </div>
        <hr />
        <p className='event-p3'>There isn't anything scheduled yet, but please check back soon to find fun events near you!</p>
    </div>
  )
}

export default Events
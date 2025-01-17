import React from 'react'
import "../Css/books.css"
import "../Css/kids.css"
import { Link, Outlet } from 'react-router-dom';
import KidsCategory from './KidsCategory';

function Kids() {
  return (
    <div className='books-main'>
      <h1>Kids' & Baby</h1>
      <hr />
      <h3 className="h-a-x">Nothing matters to children because they are difference</h3>
      <div className='category-baby'>
        <ul>
            <li><Link to={"boys"} className='kid-l'>Boys</Link></li>
            <li><Link to={"girls"} className='kid-l'>Girls</Link></li>
            <li><Link to={"baby"} className='kid-l'>Baby</Link></li>
            <li><Link to={"gifts"} className='kid-l'>Gifts</Link></li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default Kids
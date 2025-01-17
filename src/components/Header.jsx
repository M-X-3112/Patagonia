import React from 'react'
import "../Css/header.css"
import HeaderTop from './HeaderTop'
import HeaderDown from './HeaderDown'

function Header() {
  return (
    <div className='header-d-main'>
      <HeaderTop />
      <HeaderDown />
    </div>
  )
}

export default Header
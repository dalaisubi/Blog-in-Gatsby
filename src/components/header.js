import React from 'react'
import { Link } from 'gatsby'
import Menu from './menu'

import './style/header.css'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '2rem 1.0875rem .2rem 1.0875rem',
        display: 'flex'
      }}
    >
      <div >
        <Link to="/" className='link' >
          NavBar 
          {/*siteTitle*/}
        </Link>        
      </div>
      <Menu /> 
    </div>
  </div>
)

export default Header

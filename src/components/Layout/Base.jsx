import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Base = (props) => {
  return (
    <>
      <Header />
      <div className="bg-image">
        <div className="sidebar-section d-none d-md-block">
          <Sidebar />
        </div>
        <div className='mains-content'
        >
          <div className="px-2 px-md-5">
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Base

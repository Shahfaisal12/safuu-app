import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Base = (props) => {
  return (
    <>
      <Header />
      <div className="bg-image">
              <div className="sidebar-section">
              <Sidebar />
              </div>
            <div className='mainss'
            >
             <div className="px-5">
             {props.children}

             </div>
            </div>
          </div>
      <Footer />
    </>
  )
}

export default Base

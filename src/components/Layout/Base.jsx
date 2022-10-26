import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Base = (props) => {
  return (
    <>
      <Header />
      <div className="bg-image pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 pt-5" >
              <div className="sidebar-section">
              <Sidebar />
              </div>
            </div>
            <div className='col-md-9'
            >
              {props.children}

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Base

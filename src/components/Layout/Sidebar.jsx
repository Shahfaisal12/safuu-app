import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='py-5'>
            <div className="logo">
                <a href="/" className='d-flex justify-content-center'><img src="https://app.safuu.com/static/media/safuu-logo.ca35646e.png" width={'50%'} className='img-fluid' alt="" /></a>
            </div>

            <div className="menu-list">
                <ul className='p-0'>
                    <li>
                        <Link to="/" className='d-flex align-items-center text-decoration-none active'>
                            <img src="assets/item-1.png" alt="" className='img-fluid' style={{ width: '20px', height: '20px' }} />
                            <p className='mx-2 mb-0 fw-bold text-white'>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/account" className='d-flex align-items-center text-decoration-none'>
                            <img src="assets/item-2.png" alt="" className='img-fluid' style={{ width: '20px', height: '20px' }} />
                            <p className='mx-2 mb-0 fw-bold text-white'>Account</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/swap" className='d-flex align-items-center text-decoration-none'>
                            <img src="assets/item-3.png" alt="" className='img-fluid' style={{ width: '20px', height: '20px' }} />
                            <p className='mx-2 mb-0 fw-bold text-white'>Swap</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/calculator" className='d-flex align-items-center text-decoration-none'>
                            <img src="assets/item-4.png" alt="" className='img-fluid' style={{ width: '20px', height: '20px' }} />
                            <p className='mx-2 mb-0 fw-bold text-white'>Calculator</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/analitics" className='d-flex align-items-center text-decoration-none'>
                            <img src="assets/item-5.png" alt="" className='img-fluid' style={{ width: '20px', height: '20px' }} />
                            <p className='mx-2 mb-0 fw-bold text-white'>Analitics</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/docs" className='d-flex align-items-center text-decoration-none'>
                            <img src="assets/item-6.png" alt="" className='img-fluid' style={{ width: '20px', height: '20px' }} />
                            <p className='mx-2 mb-0 fw-bold text-white'>Docs</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
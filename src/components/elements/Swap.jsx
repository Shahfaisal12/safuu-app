import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { AiOutlineReload } from 'react-icons/ai'
import { IoMdSettings } from 'react-icons/io'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'

const Swap = () => {
    return (
        <div className="swap-section py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <Card className="swap-card">
                        <div className="d-flex align-items-center justify-content-between px-4 py-2">
                            <Card.Title className='fw-bold text-white mb-0'>S w a p</Card.Title>
                            <Card.Title className='fw-bold mb-0'><AiOutlineReload className='mx-1 fs-4 text-white' /> <IoMdSettings className='fs-4 text-white' /></Card.Title>
                        </div>
                        <Card.Body className='fw-bold py-0 text-white'>Fast, Secure, KYC-Free.</Card.Body>

                        <form>
                            <div className="form-div p-2 mt-3">
                                <div className="d-flex align-items-center justify-content-between px-4 py-2">
                                    <label className='fw-bold text-white mb-0'>From:</label>
                                    <label className='fw-bold text-white mb-0'>Balance: 0</label>
                                </div>
                                <div className="d-flex align-items-center justify-content-between px-4 py-2">
                                    <input type="text" className="form-control fw-bold text-white bg-transparent border-0" placeholder="0.00" /> <span className='fw-bold color-07de0f mx-2'>Max</span>
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle fw-bold text-white outline-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src='https://app.safuu.com/static/media/bnb-icon.cda692f5.svg' alt='' className='img-fluid' /> BAN
                                        </button>
                                        <ul className="dropdown-menu" style={{ background: '#000' }} aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item align-items-center text-white fw-bold" href="/"><img src='https://app.safuu.com/static/media/bnb-icon.cda692f5.svg' alt='' className='img-fluid' /> BAN</a></li>
                                            <li><a className="dropdown-item text-white fw-bold" href="/"><img src='https://app.safuu.com/static/media/safuu-logo.ca35646e.png' alt='' className='img-fluid' width={20} />SAFUU</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="form-div p-2 mt-3">
                                <div className="d-flex align-items-center justify-content-between px-4 py-2">
                                    <label className='fw-bold text-white mb-0'>To:</label>
                                    <label className='fw-bold text-white mb-0'>Balance: 0</label>
                                </div>
                                <div className="d-flex align-items-center justify-content-between px-4 py-2">
                                    <input type="text" className='fw-bold text-white bg-transparent border-0' name="to" placeholder="0.00" autocomplete="off" value="9463.90817 "></input>
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle fw-bold text-white outline-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src='https://app.safuu.com/static/media/bnb-icon.cda692f5.svg' alt='' className='img-fluid' /> BAN
                                        </button>
                                        <ul className="dropdown-menu" style={{ background: '#000' }} aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item align-items-center text-white fw-bold" href="/"><img src='https://app.safuu.com/static/media/bnb-icon.cda692f5.svg' alt='' className='img-fluid' /> BAN</a></li>
                                            <li><a className="dropdown-item text-white fw-bold" href="/"><img src='https://app.safuu.com/static/media/safuu-logo.ca35646e.png' alt='' className='img-fluid' width={20} />SAFUU</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-4 py-2">
                                <label className='fw-bold text-white mb-0'>Slippage Tolerance</label>
                                <label className='fw-bold text-white mb-0'>0.1%</label>
                            </div>

                            <div className="swap-btn mt-2" >
                                <Button variant="" className='btn-wallet fs-5 fw-bold text-white w-100 p-2'>Connect Wallet</Button>
                            </div>
                            <div  className="form-div p-2 mt-3">
                            <div className="d-flex align-items-center justify-content-between px-4 py-2">
                                <Card.Subtitle className='fw-bold text-white mb-0'>Minimum received <HiOutlineQuestionMarkCircle /></Card.Subtitle>
                              <Card.Subtitle className='fw-bold mb-0 text-white'>0 SAFUU</Card.Subtitle>
                          </div>
                            <div className="d-flex align-items-center justify-content-between px-4 py-2">
                                <Card.Subtitle className='fw-bold text-white mb-0'>Price Impact <HiOutlineQuestionMarkCircle /></Card.Subtitle>
                              <Card.Subtitle className='fw-bold mb-0 text-white'>0%</Card.Subtitle>
                          </div>
                            <div className="d-flex align-items-center justify-content-between px-4 py-2">
                                <Card.Subtitle className='fw-bold text-white mb-0'>Liquidity Provider Fee <HiOutlineQuestionMarkCircle /></Card.Subtitle>
                              <Card.Subtitle className='fw-bold mb-0 text-white'>0% - No Fee</Card.Subtitle>
                          </div>
                            <div className="d-flex align-items-center justify-content-between px-4 py-2">
                                <Card.Subtitle className='fw-bold text-white mb-0'>Route <HiOutlineQuestionMarkCircle /></Card.Subtitle>
                              <Card.Subtitle className='fw-bold mb-0 text-white'>SAFUU BNB</Card.Subtitle>
                          </div>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Swap
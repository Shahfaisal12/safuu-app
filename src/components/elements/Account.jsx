import React from 'react'
import { Card } from 'react-bootstrap'

const Account = () => {
    return (
        <div className="account-section py-5">
            <div className="container">

                <div className="row">
                    <div className="col-md-4 col-12">
                        <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
                            <Card.Title className='fw-bold mb-0'>Your Balance</Card.Title>
                            <Card.Title className='fw-bold  mb-0 color-07de0f'>$0</Card.Title>
                            <Card.Title className='fw-bold'>0 SAFUU</Card.Title>
                        </Card>
                    </div>
                    <div className="col-md-4 col-12">
                        <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
                            <Card.Title className='fw-bold mb-0'>$ Value of FirePit </Card.Title>
                            <Card.Title className='fw-bold  mb-0 color-07de0f'>$25,434,535</Card.Title>
                            <Card.Title className='fw-bold'>$25,434,535</Card.Title>
                        </Card>
                    </div>
                    <div className="col-md-4 col-12">
                        <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
                            <Card.Title className='fw-bold mb-0'>% FirePit : Supply </Card.Title>
                            <Card.Title className='fw-bold  mb-0 color-07de0f'>26.43%</Card.Title>
                            <Card.Title className='fw-bold'>26.43%</Card.Title>
                        </Card>
                    </div>
                </div>

                <div className="row pt-4">
                    <div className="col-12">
                        <Card className='card bg-transparent p-2 mb-3'>
                            <div className="d-flex align-items-center justify-content-between px-2 px-md-4 py-2">
                                <Card.Subtitle className='fw-bold text-white mb-0'>Current SAFUU Price</Card.Subtitle>
                              <Card.Title className='fw-bold mb-0 pt-0'>$1.55</Card.Title>
                          </div>
                            <div className="d-flex align-items-center justify-content-between px-2 px-md-4 py-2">
                                <Card.Subtitle className='fw-bold text-white mb-0'>Next Reward Amount</Card.Subtitle>
                              <Card.Title className='fw-bold mb-0 pt-0'>0 SAFUU</Card.Title>
                          </div>
                            <div className="d-flex align-items-center justify-content-between px-2 px-md-4 py-2">
                                <Card.Subtitle className='fw-bold text-white mb-0'>Next Reward Amount USD</Card.Subtitle>
                              <Card.Title className='fw-bold mb-0 pt-0'>$0</Card.Title>
                          </div>
                            <div className="d-flex align-items-center justify-content-between px-2 px-md-4 py-2">
                                <Card.Subtitle className='fw-bold text-white mb-0'>Next Reward Yield</Card.Subtitle>
                              <Card.Title className='fw-bold mb-0 pt-0'>0.02355%</Card.Title>
                          </div>
                            <div className="d-flex align-items-center justify-content-between px-2 px-md-4 py-2">
                                <Card.Subtitle className='fw-bold text-white mb-0'>ROI(1-Day Rate) USD</Card.Subtitle>
                              <Card.Title className='fw-bold mb-0 pt-0'>$0</Card.Title>
                          </div>
                            <div className="d-flex align-items-center justify-content-between px-2 px-md-4 py-2">
                                <Card.Subtitle className='fw-bold text-white mb-0'>ROI(5-Day Rate)</Card.Subtitle>
                              <Card.Title className='fw-bold mb-0 pt-0'>11.96%</Card.Title>
                          </div>
                            <div className="d-flex align-items-center justify-content-between px-2 px-md-4 py-2">
                                <Card.Subtitle className='fw-bold text-white mb-0'>ROI(5-Day Rate) USD</Card.Subtitle>
                              <Card.Title className='fw-bold mb-0 pt-0'>$0</Card.Title>
                          </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
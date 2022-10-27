import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'

const Analitic = () => {
    return (
        <div className="analitic-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 mb-3">
                        <Card className='card bg-transparent text-center p-2 justify-content-center'>
                            <Card.Title className='fw-bold text-white my-3 fs-4'>How much you have invested so far?</Card.Title>
                            <Card.Title className='fw-bold color-07de0f'><img src="https://app.safuu.com/static/media/earn.0f7dcd87.png" className='img-fluid' width={60} alt="" /></Card.Title>
                            <div className="fs-2 fw-bold text-white">Total Investment</div>
                            <div className="swap-btn mt-2 mb-3" >
                                <Button variant="" className='btn-wallet fs-5 fw-bold text-white w-100 p-2 rounded'>$0</Button>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-4 col-12 mb-3">
                        <Card className='card bg-transparent text-center p-2 justify-content-center'>
                            <Card.Title className='fw-bold text-white my-3 fs-4'>Risk Meter</Card.Title>
                            <div className="d-flex justify-content-center mb-3">
                                <img src="https://app.safuu.com/static/media/metrc-bg.be1bb429.png" className='img-fluid' alt="" />
                            </div>
                        </Card>
                    </div>
                    <div className=" col-12 col-md-4 mb-3">
                        <Card className='card bg-transparent text-center p-2 justify-content-center'>
                            <Card.Title className='fw-bold text-white my-3 fs-4'>How much you have withdrawn so far?</Card.Title>
                            <div className="d-flex justify-content-center">
                                <img src="https://app.safuu.com/static/media/lose.45a4bceb.png" className='img-fluid' width={60} alt="" />
                            </div>
                            <div className="fs-2 fw-bold text-white">Total Earned</div>
                            <div className="swap-btn mt-2 mb-3" >
                                <Button variant="" className='btn-wallet fs-5 fw-bold text-white w-100 p-2 rounded'>$0</Button>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="card-trading-history p-2">

                        <div className="text-center my-3">
                            <span className='bdr1 p-2 color-34c439 fw-bold'>Recent Trading History</span>
                        </div>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>Transaction Hash</th>
                                    <th>Block Number</th>
                                    <th>Method</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>$ SAFUU</th>
                                    <th>$ BNB</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analitic
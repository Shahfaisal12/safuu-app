import React from 'react'
import { Card } from 'react-bootstrap'

const Hero = () => {
  return (
    <div className="dashboard-section py-5">
      <div className="container pt-5">
        <div className="row justify-content-center pt-5">
          <div className="col-md-4 col-12">
            <div className="row">
              <div className="col-md-12">
                <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
                  <Card.Title className='fw-bold text-white mb-0'>Market Value of Treasury Asset </Card.Title>
                  <Card.Title className='fw-bold'> $58,751,524</Card.Title>
                </Card>
              </div>
              <div className="col-md-12">
                <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
                  <Card.Title className='fw-bold text-white mb-0'>Total Supply </Card.Title>
                  <Card.Title className='fw-bold'>61,634,066.59</Card.Title>
                </Card>
              </div>
              <div className="col-md-12">
                <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
                  <Card.Title className='fw-bold text-white mb-0'>Circulating Supply </Card.Title>
                  <Card.Title className='fw-bold'>45,339,478.43</Card.Title>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
              <Card.Title className='fw-bold text-white my-3'><span className='bdr'>SAFUU PRICE</span></Card.Title>
              <Card.Title className='fw-bold'>$1.56</Card.Title>
              <div className="timer"><span>00:07:55</span></div>
              <Card.Title className='fw-bold'>Rebasing...</Card.Title>
            </Card>
          </div>
          <div className="col-md-4 col-12">
            <div className="row">
              <div className="col-md-12">
                <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
                  <Card.Title className='fw-bold text-white mb-0'>MarketCap </Card.Title>
                  <Card.Title className='fw-bold'>$70,771,261</Card.Title>
                </Card>
              </div>
              <div className="col-md-12">
                <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
                  <Card.Title className='fw-bold text-white mb-0'>Pool Value </Card.Title>
                  <Card.Title className='fw-bold'>$9,166,239</Card.Title>
                </Card>
              </div>
              <div className="col-md-12">
                <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
                  <Card.Title className='fw-bold text-white mb-0'>% FirePit : Supply </Card.Title>
                  <Card.Title className='fw-bold'>26.43%</Card.Title>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
              <Card.Title className='fw-bold text-white mb-0'># Value of FirePit </Card.Title>
              <Card.Title className='fw-bold'>16,294,588.16 SAFUU</Card.Title>
            </Card>
          </div>
          <div className="col-md-4 col-12">
            <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
              <Card.Title className='fw-bold text-white mb-0'>$ Value of FirePit </Card.Title>
              <Card.Title className='fw-bold'>$25,434,535</Card.Title>
            </Card>
          </div>
          <div className="col-md-4 col-12">
            <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
              <Card.Title className='fw-bold text-white mb-0'>% FirePit : Supply </Card.Title>
              <Card.Title className='fw-bold'>26.43%</Card.Title>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
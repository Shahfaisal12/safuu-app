import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStopwatch from 'react-stopwatch';

const Hero = () => {
  return (
    <div className="dashboard-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-12 col-md-12 col-12">
            <div className="row">
              <div className="col-md-12">
                <Card className='card bg-transparent text-center p-2 mb-3 m-auto' style={{ maxWidth: '600px' }}>
                  <Card.Title className='fw-bold text-white mb-0'>Market Value of Treasury Asset </Card.Title>
                  <Card.Title className='fw-bold color-07de0f'> $58,751,524</Card.Title>
                </Card>
              </div>
              <div className="col-md-12">
                <Card className='card bg-transparent text-center p-2 mb-3 m-auto' style={{ maxWidth: '600px' }}>
                  <Card.Title className='fw-bold text-white mb-0'>Total Supply </Card.Title>
                  <Card.Title className='fw-bold color-07de0f'>61,634,066.59</Card.Title>
                </Card>
              </div>
              <div className="col-md-12">
                <Card className='card bg-transparent text-center p-2 mb-3 m-auto' style={{ maxWidth: '600px' }}>
                  <Card.Title className='fw-bold text-white mb-0'>Circulating Supply </Card.Title>
                  <Card.Title className='fw-bold color-07de0f'>45,339,478.43</Card.Title>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12">
            <Card className='card bg-transparent text-center p-2 mb-3 m-auto' style={{ maxWidth: '600px' }}>
              <Card.Title className='fw-bold text-white my-3'><span className='bdr'>SAFUU PRICE</span></Card.Title>
              <Card.Title className='fw-bold color-07de0f'>$1.56</Card.Title>
              <div className="timer rounded-circle d-none d-md-block"><span className='fw-bold fs-4'>
                <ReactStopwatch
                  seconds={0}
                  minutes={0}
                  hours={0}
                  limit="24:60:60"
                  onChange={({ hours, minutes, seconds }) => {
                    // do something
                  }}
                  onCallback={() => console.log('Finish')}
                  render={({ formatted, hours, minutes, seconds }) => {
                    return (
                      <div>
                         {formatted}
                      </div>
                    );
                  }}
                />
              </span></div>
              <Card.Title className='fw-bold text-white d-none d-md-block'>Rebasing...</Card.Title>
            </Card>
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12">
            <div className="row">
              <div className="col-md-12">
                <Card className='card bg-transparent text-center p-2 mb-3 m-auto' style={{ maxWidth: '600px' }}>
                  <Card.Title className='fw-bold text-white mb-0'>MarketCap </Card.Title>
                  <Card.Title className='fw-bold color-07de0f'>$70,771,261</Card.Title>
                </Card>
              </div>
              <div className="col-md-12">
                <Card className='card bg-transparent text-center p-2 mb-3 m-auto' style={{ maxWidth: '600px' }}>
                  <Card.Title className='fw-bold text-white mb-0'>Pool Value </Card.Title>
                  <Card.Title className='fw-bold color-07de0f'>$9,166,239</Card.Title>
                </Card>
              </div>
              <div className="col-md-12">
                <Card className='card bg-transparent text-center p-2 mb-3 m-auto' style={{ maxWidth: '600px' }}>
                  <Card.Title className='fw-bold text-white mb-0'>% FirePit : Supply </Card.Title>
                  <Card.Title className='fw-bold color-07de0f'>26.43%</Card.Title>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <Card className='card bg-transparent text-center p-2 mb-3 m-auto' style={{ maxWidth: '600px' }}>
              <Card.Title className='fw-bold text-white mb-0'># Value of FirePit </Card.Title>
              <Card.Title className='fw-bold color-07de0f'>16,294,588.16 SAFUU</Card.Title>
            </Card>
          </div>
          <div className="col-md-4 col-12">
            <Card className='card bg-transparent text-center p-2 mb-3 m-auto' style={{ maxWidth: '600px' }}>
              <Card.Title className='fw-bold text-white mb-0'>$ Value of FirePit </Card.Title>
              <Card.Title className='fw-bold color-07de0f'>$25,434,535</Card.Title>
            </Card>
          </div>
          <div className="col-md-4 col-12">
            <Card className='card bg-transparent text-center p-2 mb-3 m-auto' style={{ maxWidth: '600px' }}>
              <Card.Title className='fw-bold text-white mb-0'>% FirePit : Supply </Card.Title>
              <Card.Title className='fw-bold color-07de0f'>26.43%</Card.Title>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
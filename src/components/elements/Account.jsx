import React from 'react'
import { Card } from 'react-bootstrap'

const Account = () => {
  return (
   <div className="account-section py-5">
<div className="container pt-5">
  
<div className="row pt-5">
          <div className="col-md-4 col-12">
            <Card className='card bg-transparent text-center p-2 mb-3' style={{ maxWidth: '600px' }}>
              <Card.Title className='fw-bold text-white mb-0'>Your Balance</Card.Title>
              <Card.Title className='fw-bold'>$0</Card.Title>
              <Card.Title className='fw-bold'>0 SAFUU</Card.Title>
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

export default Account
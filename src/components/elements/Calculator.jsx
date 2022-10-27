import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'


const PrettoSlider = styled(Slider)({


    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#232323',
        border: '3px solid #52af77',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});



const Calculator = () => {
    return (
        <div className="calculator-section py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <Card className='card px-2 px-md-5 py-4 bg-transparent'>
                        <Card.Title className='fw-bold text-white'>Calculator</Card.Title>
                        <Card.Subtitle className='fw-bold text-white'>Estimate your returns</Card.Subtitle>

                        <div className="d-flex flex-wrap justify-content-between py-3">
                            <div className='text-center mt-3'>
                                <Card.Title className='fw-bold mb-0' style={{ color: 'hsl(0deg 0% 100% / 60%)' }}>SAFUU Price </Card.Title>
                                <Card.Title className='fw-bold color-07de0f fs-3'> $1.56 </Card.Title>
                            </div>
                            <div className='text-center mt-3'>
                                <Card.Title className='fw-bold mb-0' style={{ color: 'hsl(0deg 0% 100% / 60%)' }}>Current APY </Card.Title>
                                <Card.Title className='fw-bold color-07de0f fs-3'> 383,025.8% </Card.Title>
                            </div>
                            <div className='text-center mt-3'>
                                <Card.Title className='fw-bold mb-0' style={{ color: 'hsl(0deg 0% 100% / 60%)' }}>Your SAFUU Balance</Card.Title>
                                <Card.Title className='fw-bold color-07de0f fs-3'>0 SAFUU</Card.Title>
                            </div>
                        </div>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label className='fw-bold text-white'>SAFUU Amount</Form.Label>
                                    <InputGroup className="mb-2 p-1">
                                        <Form.Control className='color-gray fw-bold border-0 bg-transparent' placeholder="0" />
                                        <InputGroup.Text className='fw-bold text-white border-0 coursor bg-transparent ml-0 cursor-pointer fs-5'>Max</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label className='fw-bold text-white'>APY (%)</Form.Label>
                                    <InputGroup className="mb-2 p-1">
                                        <Form.Control className='color-gray fw-bold border-0 bg-transparent' placeholder="383025.8" />
                                        <InputGroup.Text className='fw-bold text-white border-0 coursor bg-transparent ml-0 cursor-pointer fs-5'>Current</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label className='fw-bold text-white'>SAFUU price at purchase ($)</Form.Label>
                                    <InputGroup className="mb-2 p-1">
                                        <Form.Control className='color-gray fw-bold border-0 bg-transparent' placeholder="1.56" />
                                        <InputGroup.Text className='fw-bold text-white border-0 coursor bg-transparent ml-0 cursor-pointer fs-5'>Current</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label className='fw-bold text-white'>Future SAFUU market price ($)</Form.Label>
                                    <InputGroup className="mb-2 p-1">
                                        <Form.Control className='color-gray fw-bold border-0 bg-transparent' placeholder="1.56" />
                                        <InputGroup.Text className='fw-bold text-white border-0 coursor bg-transparent ml-0 cursor-pointer fs-5'>Current</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Typography gutterBottom className='text-white fw-bold'>23 days First Year :<span className='mx-3'> 0.02355% Per EPOCH</span></Typography>
                                    <PrettoSlider
                                        valueLabelDisplay="auto"
                                        aria-label="pretto slider"
                                        defaultValue={20}
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Typography gutterBottom className='text-white fw-bold'>Second Year : 0.00211% Per EPOCH</Typography>
                                    <PrettoSlider
                                        valueLabelDisplay="auto"
                                        aria-label="pretto slider"
                                        defaultValue={20}
                                    />
                                </Form.Group>
                            </Row>
                            <div className="mt-3">
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <Card.Subtitle className='fw-bold text-white mb-0'>Your initial investment</Card.Subtitle>
                                    <Card.Subtitle className='fw-bold mb-0 text-white'>$0</Card.Subtitle>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <Card.Subtitle className='fw-bold text-white mb-0'>Current wealth</Card.Subtitle>
                                    <Card.Subtitle className='fw-bold mb-0 text-white'>$0</Card.Subtitle>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <Card.Subtitle className='fw-bold text-white mb-0'>SAFUU rewards estimation</Card.Subtitle>
                                    <Card.Subtitle className='fw-bold mb-0 text-white'>0 SAFUU</Card.Subtitle>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <Card.Subtitle className='fw-bold text-white mb-0'>Potential return</Card.Subtitle>
                                    <Card.Subtitle className='fw-bold mb-0 text-white'>$0</Card.Subtitle>
                                </div>
                            </div>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Calculator
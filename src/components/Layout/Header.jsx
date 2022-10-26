import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {BsTwitter} from 'react-icons/bs'
import {FaDiscord} from 'react-icons/fa'
import {IoIosSend} from 'react-icons/io'
import {CgUnfold} from 'react-icons/cg'

const Header = () => {
  return (
    <div className="header-section bg-010901 bdr-btm py-4 fixed-top">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className='nav-logo text-white fw-bold'>SAFUU</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className='justify-content-end' id="navbarScroll">
            <div className="social-icon d-flex mx-4">
              <a href="/" className=''><BsTwitter /></a>
              <a href="/" className=''><FaDiscord /></a>
              <a href="/" className=''><IoIosSend /></a>
              <a href="/" className=''><CgUnfold /></a>
            </div>
            <Button variant="" className='btn-safu mx-4 fw-bold text-white'>SAFUU</Button>
            <Button variant="" className='btn-wallet fw-bold text-white'>Connect Wallet</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='row w-100 p-5'>
        <div className='col-md-4'>
            <h3 className='text-warning '> <FontAwesomeIcon className='me-3' icon={faVideo} />Media Player</h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error adipisci quas modi facilis culpa quisquam commodi esse, assumenda, doloremque similique mollitia ut atque, dolores sint quis aspernatur? Ipsa, voluptatibus doloremque.</p>
        </div>
        <div className='col-md-2 d-md-flex flex-column align-items-center '>
            
            <h4>Links</h4>
            <div>
            <Link to={'/'}><p>Landing Page</p></Link>
            <Link to={'/home'}><p>Home</p></Link>
            <Link to={'/Watchhistory'}><p>Watch History</p></Link>
            </div>
        </div>
        <div className='col-md-2'>
            <h4>Guide</h4>
            <div>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>BootsWatch</p>
            </div>
        </div>
        <div className='col-md-4'>
          <h4>Contacts</h4>
          <div className='d-flex mt-2'>
            <input className='form-control' placeholder='enter email' type='email'/>
            <button className='btn btn-warning ms-2'>Submit</button>
          </div>
          <div className='d-flex justify-content-between mt-4'>
          <FontAwesomeIcon icon={faFacebook}  className='fa-2x'/>
          <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
          <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
          <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

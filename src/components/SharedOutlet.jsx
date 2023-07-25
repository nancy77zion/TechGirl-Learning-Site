import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import { FaTwitter,FaLinkedin, FaCopyright, FaFacebook, FaInstagram, FaSlack} from 'react-icons/fa'
import { FaHome, FaPhone, FaMailBulk } from 'react-icons/fa'
import Nav from './Nav'

const SharedOutlet = () => {
  return (
    <>
      <Nav />
      <Outlet/>
      <div className='footer-cont container-fluid container-fluid-sm'>
        <div className='footer row'>
          <p  className='col-sm-6 pt-3'>Get connected with us on social networks: </p>
          <div  className='col-sm-6 px-md-5 text-md-end' >
            <span className=' px-2'><a className='text-white' href=''><FaTwitter /></a></span>
            <span className=' px-2'><a className='text-white' href=''><FaLinkedin /></a></span>
            <span className=' px-2'><a className='text-white' href=''><FaFacebook /></a></span>
            <span className=' px-2'><a className='text-white' href=''><FaInstagram /></a></span>
            <span className=' px-2'><a className='text-white' href=''><FaSlack /></a></span>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 px-4'>
            <div className='d-flex px-3 pt-4'>
            <h2 className='foot-h3'>T</h2>
            <h2 className='foot-h2'>Tech<span className='text-success'>Girls</span></h2>
            </div>
            <p className='pt-3 px-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam vitae mollitia tenetur corporis. Natus ex nemo dicta obcaecati, sapiente, ut voluptate ratione modi iure accusantium similique</p>
          </div>
          <div className='col-md-4 text-center py-4'>
            <h4>Quick links</h4>
            <div className='d-flex flex-column'>
              <Link className='pt-2 text-decoration-none text-black'>About</Link>
              <Link className='pt-2 text-decoration-none text-black'>Courses</Link>
              <Link className='pt-2 text-decoration-none text-black'>FAQs</Link>
            </div>
          </div>
          <div className='col-md-4 text-center py-4'>
            <h4>Contact us</h4>
            <p><FaHome /> 7 New Haven Road, Lagos. Nigeria</p>
            <p><FaPhone /> (+234) 7086419364</p>
            <p><FaMailBulk /> <a href='mailto:'> support@techgirls.com</a></p>
          </div>
        </div>
        <div className='text-center '><FaCopyright /> 2023 Copyright TechGirls.com</div>
        
      </div>
      </>
  )
}

export default SharedOutlet
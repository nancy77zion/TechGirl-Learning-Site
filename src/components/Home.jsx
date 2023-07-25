import React from 'react'
import lady from '../assets/charm.png'

const Home = () => {
  return (
    <div className='container-fluid-lg'>
      <div className='row mx-0 px-4 my-0' style={{background: '#d7fad7'}}>
      <div className='col mt-4 mt-md-5 '>
        <h1 className=''>Welcome to Tech<span className='text-success'>Girls</span></h1>
        <h5>Now learning from anywhere, and build a <span className='text-success text-decoration-underline' style={{fontFamily: 'sans-serif'}}>bright career</span></h5>
        <p className='pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam vitae mollitia tenetur corporis. Natus ex nemo dicta obcaecati, sapiente, ut voluptate ratione modi iure accusantium similique, cupiditate dolores. Corrupti, dolorem!</p>
      </div>
      <div className='lady col mt-3'>
        <img src={lady} alt='lady' />
      </div>
      
    </div>
    </div>
    
  )
}

export default Home
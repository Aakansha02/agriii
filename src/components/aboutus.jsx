import React from 'react'

const aboutus = () => {
  let message ='prabhakar hehe';
  return (
    <div className='section-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-centre'>
            <h2 className='section-title'>
              The Team Behind Krishak
            </h2>
<p className='section-subtitle'>
(message)
</p>
          </div>
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fscience%2Fflower&psig=AOvVaw3r_eZHaZQW7eBJFkIPraKb&ust=1679397115896000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLiKtPSv6v0CFQAAAAAdAAAAABAE'className='team-img' alt='haaha'>

              </img>
<h3> PHALESH MISHRA
</h3>
<div className='team-info'>
  <p>BACKEND DEVELOPER</p>
  <p></p>
  <ul className='team-icon'>
    <li><a href='#' className='LinkedIn'>
        <i className='fa fa-LinkedIn' ></i>
      </a></li>
      <li><a href='#' className=''>
        <i className='fa fa-'></i>
      </a></li>
      <li><a href='#'>
        <i className='fa fa-twitter'></i>
      </a></li>
  </ul>

</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default aboutus
import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

const navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
    
      <a class="navbar-brand fw-bold fs-2" href="#">AGRIII</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
           
            <Link to='/' class="nav-link active">Home</Link>
          </li>
          <li class="nav-item">
  
            <Link to='/About' class="nav-link">About</Link>
            
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              categories
            
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Tractors</a></li>
              <li><a class="dropdown-item" href="#">Spade</a></li>
              <li><a class="dropdown-item" href="#">Cultivator</a></li>
              <li><a class="dropdown-item" href="#">Harvester</a></li>
            </ul>
          </li>
          <div class="navbarsear bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
         
        </ul>
        <div className='Buttons'>
            <a href=" " className='btn btn-outline-dark'>
                <i className='fa fa-sign-in me-1'></i> Login</a>
                <a href=" " className='btn btn-outline-dark ms-2'>
                <i className='fa fa-user-plus me-1'></i> Register</a>
                <a href=" " className='btn btn-outline-dark ms-2'>
                <i className='fa fa-shopping-cart me-1'></i>Cart(0)</a>
        </div>
      </div>
    
  </nav>
  )
}

export default navbar
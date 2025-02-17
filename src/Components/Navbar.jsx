import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
           <nav className="navbar fixed-top navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Newsapp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
        <li className="nav-item">
          <Link style={{textDecoration:'none',margin:'5px', color:'white'}} className="nav-Link" to="/business">business</Link>
        </li>
        <li className="nav-item">
          <Link style={{textDecoration:'none',margin:'5px', color:'white'}} className="nav-Link" to="/entertainment">entertainment</Link>
        </li>
        <li className="nav-item">
          <Link style={{textDecoration:'none',margin:'5px', color:'white'}} className="nav-Link" to="/science">science</Link>
        </li>
        <li className="nav-item">
          <Link style={{textDecoration:'none',margin:'5px', color:'white'}} className="nav-Link" to="/health">health</Link>
        </li>
       
        <li className="nav-item">
          <Link style={{textDecoration:'none',margin:'5px', color:'white'}} className="nav-Link" to="/sports">sports</Link>
        </li>
        <li className="nav-item">
          <Link style={{textDecoration:'none',margin:'5px', color:'white'}} className="nav-Link" to="/technology">technology</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
 
  )
}
export default Navbar;

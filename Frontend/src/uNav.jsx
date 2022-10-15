import React from 'react';
import { NavLink } from 'react-router-dom';

const uNav = () => {
    return(
        <>      
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>

              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                  <NavLink className="navbar-brand" to='/user-home'> Q-Pons Users <i className='fab fa-typo3' /> </NavLink>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                      <NavLink exact activeClassName='menu_active' className="nav-link" to='/user-home'> Home
                      <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to='/user-profile'> Profile</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to='/user-wishlist'> Wishlist</NavLink>
                    </li>
                    
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to='/user-services'> Services </NavLink>
                       
                    </li>
                  </ul>
                  {/* <button class="btn btn-outline-success me-2" type="button">Log In</button>   */}
                  </div>
                </div>
                </nav>
            </div>
          </div>
        </div>  
        
      </>
    )
}

export default uNav;
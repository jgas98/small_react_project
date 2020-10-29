import React from 'react';

import {FaBars} from 'react-icons/fa';

import styled from 'styled-components';

import {ProductConsumer} from '../context';

export default function Navbar() {

  return (
    
    <ProductConsumer>
      
      {value => {
        
        const {handleSidebar} = value;
        
        return (
        
          <NavWrapper>
            
            <div className = 'nav-center'>
              
              <FaBars className = 'nav-icon' onClick = {handleSidebar} />
              
              <img src = "https://i.pinimg.com/originals/c8/af/64/c8af6490362d3e2e61069c3b42922afd.png" alt = 'logo_vox' className = 'logo' width = "20%" height = "50px"/>
            
            </div>
          
          </NavWrapper>
        
        );
      
      }}
    
    </ProductConsumer>
  
  );

}

const NavWrapper = styled.nav`
  
  position: -webkit-sticky;

  position: sticky;

  top: 0;

  width: 100%;

  padding: 0.23rem 1.5rem;

  background: #FFFAFA;

  border-bottom: 3px solid var(--primaryColor);

  z-index: 1;

  .nav-center {display: flex; align-items: center; justify-content: space-between; max-width: 1170px; margin: 0 auto;}
    
  .nav-icon {font-size: 1.5rem;c ursor: pointer;}
  
  @media only screen and (max-width: 600px) {.logo {max-width: 200px;}}

`;

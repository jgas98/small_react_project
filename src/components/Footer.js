import React from 'react';

import styled from 'styled-components';

import { ProductConsumer } from '../context';

export default function Footer() {
  
  return (
  
    <ProductConsumer>
      
      {value => {
        
        return (
        
          <FooterWrapper>
            
            <div className = 'container py-3'>
              
              <div className = 'row'>
                
                <div className = 'col-md-12 d-flex justify-content-around'>
                  
                  {value.socialIcons.map(item => (<a href = {item.url} key = {item.id}> {item.icon} </a> ))}
                
                </div>
              
              </div>
            
            </div>
          
          </FooterWrapper>
        
        );
      
      }}
    
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  
  background: indigo;
  
  color: beige;
  
  .icon {font-size: 1.5rem; color: beige; transition: var(--mainTranstion);}
  
  .icon:hover {color: var(--primaryColor); cursor: pointer;}

`;

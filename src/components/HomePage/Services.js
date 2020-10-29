import React, {Component} from 'react';

import styled from 'styled-components';

import {FaDolly, FaRedo, FaDollarSign} from 'react-icons/fa';

export default class Services extends Component {
  
  info = {
    
    servicios: [
      
      {id: 1, icon: <FaDolly/>, title: 'Envios gratis a todas las partes del mundo', text: 'Envios a todo el mundo pueden llegar a tardar entre 4-5 años'},
      
      {id: 2, icon: <FaRedo/>, title: 'Devoluciones a gastos pagados', text: 'Puedes devolver el producto si no funciona a golpes'},
      
      {id: 3, icon: <FaDollarSign /> , title: 'Pagos Inseguros', text: 'Todo lo que tengas nos pertenece'}
    
    ]
  
  };
  
  render() {
    
    return (
    
      <ServicesWrapper className = 'py-5'>
        
        <div className = 'container'>
          
          <div className ='row'>
            
            {this.info.servicios.map(item => {
              
              return (
              
                <div className = 'col-10 mx-auto col-sm-6 col-md-4 text-center my-3' key = {item.id}>
                  
                  <div className = 'service-icon'> {item.icon} </div>
                  
                  <div className = 'mt-3'> {item.title} </div>
                  
                  <div className = 'mt-3'> {item.text} </div>
                
                </div> 
                
              );
              
            })}
            
          </div>
        
        </div>
      
      </ServicesWrapper>
    
    );
  
  }

}

const ServicesWrapper = styled.section`

  background: beige;

  .service-icon {font-size: 2.5rem; color: indigo;}
    
  p {color: white;}

`;

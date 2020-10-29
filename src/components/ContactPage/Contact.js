import React from 'react';

import Title from '../Title';

export default function Contact() {
  
  return (
    
    <section className = 'py-5'>
      
      <div className = 'row'>
        
        <div className = 'col-10 mx-auto col-md-6 my-3'>
          
          <Title title = 'Contacta Con Nosotros'/>
          
          <form className = 'mt-5' action = 'https://formspree.io/jgas98@hotmail.com' method = 'POST'>
            
            <div className = 'form-group'>
              
              <input type = 'text' name = 'firstName' className = 'form-control' placeholder = 'Nombre' required/>
            
            </div>
            
            <div className = 'form-group'>
              
              <input type = 'email' name = 'email' className = 'form-control' placeholder = 'Email' required/>
            
            </div>
            
            <div className = 'form-group'>
            
              <input type = 'text' name = 'subject' className = 'form-control' placeholder = 'Tema' required/>
            
            </div>
            
            <div className = 'form'>
              
              <textarea name = 'message' className = 'form-control' rows = '10' placeholder = 'Mensaje' required/>
            
            </div>
            
            <div className = 'form-group mt-3'>
              
              <input type = 'submit' value = 'Enviar' className = 'form-control' style = {{background: '#87CEFA'}}/>
            
            </div>
          
          </form>
        
        </div>
      
      </div>
    
    </section>
  
  );

}

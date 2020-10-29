import React from 'react';

import {ProductConsumer} from '../context';

const SingleProductPage = () => {
  
  return (
    
    <>
      
      <ProductConsumer>
        
        {value => {
          
          const { singleProduct} = value;
          
          const {description, price, title, image} = singleProduct;
          
          return (
            
            <section className = 'py-5'>
            
              <div className = 'container'>
            
                <div className = 'row'>
            
                  <div className = 'col-10 mx-auto col-sm-8 col-md-6 my-3'>
            
                    <img src = {`../${image}`} alt = 'single product' className = 'img-fluid'/>
                  
                  </div>

                  <div className = 'col-10 mx-auto col-sm-8 col-md-6 my-3'>
                    
                    <h5 className = 'text-title mb-4'> {title} </h5>
                    
                    <h5 className = 'text-main text-capitalize mb-4'> {(price)} $ </h5>
                    
                    <p className = 'text-capitalize text-title mt-3'> {description} </p>
                                     
                  </div>
                
                </div>
              
              </div>
            
            </section>
          
          );
        
        }}
      
      </ProductConsumer>
    
    </>
  
  );

};

export default SingleProductPage;

import React from 'react';

import Product from '../Product';

import Title from '../Title';

import {ProductConsumer} from '../../context';

export default function Featured () {
  
  return (
    
    <section className = 'py-5'>
      
      <div className = 'container'>
        
        <Title title = 'Productos De Pacotilla' center = 'true' />
        
        <div className = 'row my-5'>
          
          <ProductConsumer>
            
            {value => {
              
              const {featuredProducts} = value;
              
              return featuredProducts.map(product => (
              
                <Product key = {product.id} product = {product} />
              
              ));
            
            }}
          
          </ProductConsumer>
        
        </div>
      
      </div>
    
    </section>
  
  );

}

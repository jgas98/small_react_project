import React from 'react';

import Title from '../Title';

import aboutBcg from '../../images/aboutBcg.jpeg';

export default function Info() {

  return (
  
  <section className = 'py-5'>
    
    <div className = 'container'>
      
      <div className = 'row'>
          
          <div className = 'col-10 mx-auto col-md-6 my-3'>
            
            <img src = {aboutBcg} className = 'img-fluid img-thumbnail' alt = 'Sobre Nosotros'/>
          
          </div>
          
          <div className = 'col-10 mx-auto col-md-6 my-3'>
            
            <Title title = 'Sobre Nosotros'/>
            
            <p className = 'text-lead text-muted my-3'>
              
              Tienda online que trata de vender aparatos electronicos a un precio reducido, disminuyendo su calidad 

              de manera considerable.
            
            </p>
            
            <p className = 'text-lead text-muted my-3'>
              
              Utilizamos la metodologia de trabajo Scrum que es un método para trabajar en equipo a partir de iteraciones o Sprints. 
              
              Así pues, Scrum es una metodología ágil, por lo que su objetivo será controlar y planificar proyectos con un gran volumen de cambios de última hora, 
              
              en donde la incertidumbre sea elevada. Se suele planificar por semanas.
            
            </p>
                      
          </div>
        
        </div>
      
      </div>
    
    </section>
  
  );

}
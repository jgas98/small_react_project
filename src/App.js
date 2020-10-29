import React, {Component} from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/HomePage';

import About from './pages/AboutPage';

import Contact from './pages/ContactPage';

import SingleProduct from './pages/SingleProductPage';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';

import Sidebar from './components/Sidebar';

import Footer from './components/Footer';

class App extends Component {

  render() {

    return (
    
    <>
    
      <Navbar/>
      
      <Sidebar/>
      
      <Switch>
        
        <Route path = '/' exact component = {Home}/>
        
        <Route path = '/empresa' component = {About}/>
        
        <Route path = '/contacto' component = {Contact}/>
        
        <Route path = '/productos/:id' component = {SingleProduct}/>
      
      </Switch>
      
      <Footer/>
    
    </>
    
    );
  
  }

}

export default App;

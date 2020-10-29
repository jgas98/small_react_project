import React, {Component} from 'react';

import {linkData} from './linkData';

import {socialData} from './socialData';

import {items} from './productData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  
  state = {
    
    sidebarOpen: false,
   
    links: linkData,
    
    socialIcons: socialData,
   
    storeProducts: [],
    
    featuredProducts: [],
    
    singleProduct: {},
  
  };
  
  componentDidMount() {this.setProducts(items);}

  setProducts = products => {
    
    let storeProducts = products.map(item => {
    
      const {id} = item.sys;
    
      const image = item.fields.image.fields.file.url;
    
      const product = { id, ...item.fields, image };
    
      return product;
    
    });
    
    let featuredProducts = storeProducts.filter(item => item.featured === true);

    this.setState({storeProducts, featuredProducts});
  
  };

  setSingleProduct = id => {
    
    let product = this.state.storeProducts.find(item => item.id === id);
    
    localStorage.setItem('singleProduct', JSON.stringify(product));
    
    this.setState({singleProduct: { ...product }, loading: false});
  };

  handleSidebar = () => {this.setState({ sidebarOpen: !this.state.sidebarOpen });};

  render() {
    
    return (
    
      <ProductContext.Provider
      
        value = {{
          
          ...this.state,
          
          handleSidebar: this.handleSidebar,
          
          setSingleProduct: this.setSingleProduct,
          
          handleChange: this.handleChange
        
        }}>
        
        {this.props.children}
      
      </ProductContext.Provider>
    
    );
  
  }

}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

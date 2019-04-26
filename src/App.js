import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//router
import Home from './routes/Home';
import About from './routes/About';
import Life from './routes/Life';
import Product from'./routes/Product';
import Cart from './routes/Cart';
import Search from './routes/Search';
//components
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

//services
import ServiceProduct from './services/Product';
// import ServiceAir from './services/Air.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      products:[], 
      // air :[]
    }
    this.getProducts();
  }
  async getProducts() {
    const products = await ServiceProduct.get();
    this.setState({ products });
    // console.log(products)
  }
  // async getAir() {
  //   const Air = await ServiceAir.get();
  //   this.setState({ Air });
  //   // console.log(products)
  // }
  getJsonCart(key) {
    return JSON.parse(window.localStorage.getItem(key));
  };
  renderRoute(props, Component) {
    return <Component {...props} products={this.state.products} />
  }
  render() {
    // document.title="購物網站"
    return (
      <Router>
      
        <div className="App">
          <Header />
          <Nav/> 
          <Route path="/" exact render={(props) => this.renderRoute(props, Home)}  />
          <Route path="/about/" render={(props) => this.renderRoute(props, About)} />
          <Route path="/life/" component={Life} />
          <Route path="/search/" component={Search} />
          <Route path="/product/" render={(props) => this.renderRoute(props, Product)} />
          <Route path="/cart/" render={(props) => this.renderRoute(props, Cart)} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

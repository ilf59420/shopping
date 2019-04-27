import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  SetJsonCart(key, param) {
    return (
      window.localStorage.setItem(key, JSON.stringify(param))
    )
  }
  Product(p) {
    return (
      <div className="col-lg-2 col-md-6 mb-4" key={`/product/${p.id}`}>
        <div className="card h-100">
          <Link to={{
            pathname: `product/${p.id}`,
            state: { product: p }
          }}>
            <img className="card-img-top" src={p.picture} alt="" /></Link>

          <div className="card-title home-commodity-title"><Link className="home-commodity-title navbar-brand" to={{
            pathname: `product/${p.id}`,
            state: { product: p }
          }}>{p.name}</Link>
          </div>
          <div className="home-classification-link-color link-color">
            <Link to="/" className="home-classification-link-color navbar-brand">分類</Link>
          </div>

          <div>
            <p className="card-text home-price-font">NT.{p.price}</p>
          </div>

        </div>
      </div>
    )
  }
  render() {
    // console.log(this.props.products)
    return (

      <div className="App">

        <div className="container">
          <div className="jumbotron my-4">

            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid" src="http://www.shangyi311.com/imageRepository/266af6e1-6c64-4e33-8955-00ad3620b3ff.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src="http://zgsjzx.by1983.com/Data/upload/2207488a-d53c-4e1a-99d8-f5e9715a0934.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src="http://img.archiexpo.cn/images_ae/photo-g/49563-11333126.jpg" alt="Third slide" />
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center">
            {this.props.products.map(p => this.Product(p))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

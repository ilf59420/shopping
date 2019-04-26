import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Product extends Component {

    SetJsonCart(key, param) {
        return (
            window.localStorage.setItem(key, JSON.stringify(param))
        )
    }
    getJsonItem(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }
    getItem(key) {
        return window.localStorage.getItem(key);
    }
    getCartList() {
        const Cart = [];
        if (this.getJsonItem("cartList")) return Cart.push(this.getJsonItem("cartList"))
    }
    AddCart() {
        const product = this.props.location.state.product;
        const Cart = [];
        Cart.push({ id: 1, name: product.name, price: product.price, img: product.picture })
        this.SetJsonCart("cartList", Cart)
        alert("此商品已加入購物車")
        
    }
    getAddCart() {
        const product = this.props.location.state.product;
        const Cart = this.getJsonItem("cartList");
        // console.log(Cart)
        const mapCartId = Cart.map((i) => i.id)
        const mapCartName = Cart.map((i) => i.name)
        if (mapCartName.indexOf(product.name) !== -1) {
            alert("購物車已有此商品!!")
            
        } else {
            let leng = mapCartId.length - 1
            Cart.push({ id: mapCartId[leng] + 1, name: product.name, price: product.price, img: product.picture })
            this.SetJsonCart("cartList", Cart)
            alert("此商品已加入購物車")
        }

    }

    render() {
        if (!this.props.location.state) return <Redirect to="/" />
        const product = this.props.location.state.product;
        return (
            <div className="Product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p />
                            <div className="col-lg-12 home-classification-link-color"><Link to="/">所有分類</Link>＞<Link to="/life">居家生活</Link>＞<Link to="/">傢俱</Link></div>
                            <div className="col-sm-12">

                                <div className="row">
                                    <div className="col-xs-8 col-sm-6">
                                        <img className="jumbotron img-fluid rounded" src={product.picture} alt="" />
                                    </div>
                                    <div className="col-xs-4 col-sm-6">
                                        <div className="col-xs-8 col-sm-12"><div className="mt-4 product-title">{product.name}
                                            <p />
                                            <div className="product-price-font">NT$ {product.price}</div>
                                            <p />
                                            <button onClick={() => { if (this.getItem("cartList") == null) { this.AddCart() } else { this.getAddCart() } }} className="btn btn-danger btn-lg btn-block">加入購物車</button>
                                            <hr />
                                            <div className="classification-link-color">商品資訊</div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="card my-4">
                                <h5 className="card-header">商品評價(暫無功能)</h5>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <textarea className="form-control" rows="3" ref={input => this.input = input} defaultValue="Hello" />
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >送出</button>
                                    </form>
                                </div>
                            </div>
                            <div className="media mb-4">
                                <img className="d-flex mr-3 rounded" src="http://placehold.it/50x50" alt="" />
                                <div className="media-body">
                                    <h5 className="mt-0">姓名</h5>
                                    內容
            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div >
        );
    }
}

export default Product;

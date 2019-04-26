import React, { Component } from 'react';
import { Link } from "react-router-dom";
import hoho from "../img/hoho_shop_big.png";
import cart_logo from "../img/cart.png";

class Header extends Component {

    searchGo() {
        // console.log("123")
        return <Link to="/search/" />
    }
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <title>網站標題</title>
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={hoho} alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-4">
                            <input type="search" className="form-control" placeholder="請輸入關鍵字...(暫無功能)" />
                        </div>
                        <input type="submit" className="btn btn-secondary" value="搜尋" onClick={() => this.searchGo()} />

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">首頁
                      <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about/">關於我們</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/life/">居家生活</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart/"><img src={cart_logo} alt="" className="cart-logo" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;

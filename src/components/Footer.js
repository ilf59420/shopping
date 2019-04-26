import React, { Component } from 'react';
import hoho_logo from "../img/hoho_shop_small.png";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="App">
                <footer className="py-5 bg-light">
                    <div className="container">
                        <p className="m-0 text-center footer-color">
                        <Link to="/"><img src={hoho_logo} alt=""/></Link>　天大地大中科大　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
                        Copyright &copy; hoho 2019</p>
                        </div>
                </footer>
            </div>
        );
    }
}

export default Footer;

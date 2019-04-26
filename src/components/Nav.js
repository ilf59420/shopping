import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div className="App">
                <div className="col-12 nav-bgcolor ">
                    <ul className="nav nav-tabs navbar-center">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle nav-font" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">配件飾品</Link>
                            <div className="dropdown-menu ">
                                <Link className="dropdown-item" to="#">飾品</Link>
                                <Link className="dropdown-item" to="#">口罩</Link>
                                <Link className="dropdown-item" to="#">手錶</Link>
                                <Link className="dropdown-item" to="#">頭飾</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle nav-font" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">居家生活</Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">家具</Link>
                                <Link className="dropdown-item" to="#">家電</Link>
                                <Link className="dropdown-item" to="#">雜貨</Link>
                                <Link className="dropdown-item" to="#">其他</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle nav-font" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">包包提袋</Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">日常包</Link>
                                <Link className="dropdown-item" to="#">收納包</Link>
                                <Link className="dropdown-item" to="#">錢包</Link>
                                <Link className="dropdown-item" to="#">公事包</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle nav-font" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">衣著良品</Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">女上衣</Link>
                                <Link className="dropdown-item" to="#">男上衣</Link>
                                <Link className="dropdown-item" to="#">內衣褲</Link>
                                <Link className="dropdown-item" to="#">其他衣著</Link>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}
export default Nav;




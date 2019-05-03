import React, { Component } from 'react';
import { Redirect } from "react-router-dom";


class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // let selectId = event.target.closest("div").id;
    // console.log(selectId)
    // let selectValue = event.target.closest("select").value;
    // console.log(selectValue)
    // let id = event.target.closest("div").id
    this.setState({ value: event.target.closest("select").value });
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  getJsonCart(key) {
    // JSON.parse 很容易發生錯誤而導致系統崩潰，建議使用 try
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (e) {
      console.error(e);
      return null;
    }
  };
  getCartList(p) {
    // let amount = this.state.value;
    // let idValue = p.id;
    if (!this.getJsonCart("cartList")) {
      return ("尚無資料")
    } else {
      return (
        <div id={p.id} key={p.id}>
          <table key={p.id} >
            <thead>
              <tr>
                <th scope="row">
                  <select onChange={this.handleChange} id={p.id}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                </th>
                <td><img className="card-img-top cart-picture" src={p.img} alt="" /></td>
                <td>{p.name}</td>
                <td>NT$ {p.price}</td>
              </tr>
            </thead>
          </table>
        </div>
      )
    }
  }

  totalPrice() {
    let amount = this.state.value;
    if (!this.getJsonCart("cartList")) {
      return ("尚無資料")
    } else {
      const getCart = this.getJsonCart("cartList")
      const mapPrice = getCart.map((p) => { return (p.price * amount) })
      // const reduce = mapPrice.reduce(this.getSum)
      // 這樣寫就不用額外寫 method
      const reduce = mapPrice.reduce((acc, value) => acc + value);
      return (
        <div className="row">
          <div className="col-lg-10">
          </div>
          <div className="col-lg-2">
            <div className="cart-total">總金額為:{reduce}</div>
            <button className="btn btn-danger btn-lg btn-block" data-toggle="modal" data-target=".bd-example-modal-sm" onClick={() => this.checkOut()} >結帳</button>
            <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-sm">
                <div className="modal-content">
                  結帳成功!!
          </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  checkOut() {
    return localStorage.removeItem("cartList")
  }

  // getSum(total, num) {
  //   return total + num;
  // }

  render() {
    if (!this.getJsonCart("cartList")) {
      alert("尚無商品")
      return (<Redirect to="/" />)
    } else {
      // console.log(this.getJsonCart("cartList"))
      return (
        <div className="Cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cart-title">購物車清單</div>
                <div className="list-group">

                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">商品數量</th>
                        <th scope="col">商品圖片</th>
                        <th scope="col">商品姓名</th>
                        <th scope="col">商品價格</th>
                      </tr>
                    </thead>
                  </table>

                  {this.getJsonCart("cartList").map(p => this.getCartList(p))}
                  {this.totalPrice()}

                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Cart;

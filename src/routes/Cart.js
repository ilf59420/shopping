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
    const arrSelect = [];
    const getCart = this.getJsonCart("cartList")
    console.log(getCart)
    const selectId = event.target.closest("div").id;
    const findProduct = getCart.find(e => e.id > selectId-1)
    console.log(findProduct)
    console.log("id",selectId)
    // console.log("productid",selectPrductId)
    const selectAmount = event.target.closest("select").value;
    console.log("amount",selectAmount)
    const mapgetCart = getCart.map(e=> arrSelect.push({ id: e.id, name: e.name, price: e.price, img: e.img, amount: selectAmount, product: e.product }))
    // getCart.map(e=> arrSelect.push({ id: selectId, name: findProduct.name, price: findProduct.price, img: findProduct.img, amount: selectAmount, product: findProduct.product })
    console.log(mapgetCart)
    
    // this.SetJsonCart("cartList", arrSelect);
    console.log(arrSelect)
    // this.setState({ value: event.target.closest("select").value });
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  SetJsonCart(key, param) {
    return (window.localStorage.setItem(key, JSON.stringify(param)))
  }
  getJsonCart(key) {
    return JSON.parse(window.localStorage.getItem(key));
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
                <select onChange={this.handleChange} id={p.product}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                </th>
                <td><img className="card-img-top cart-picture" src={p.img} alt="" /></td>
                <td><label>{p.name}</label></td>
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
      const reduce = mapPrice.reduce(this.getSum)
      return (
        <div className="row">
          <div className="col-lg-10">
          </div>
          <div className="col-lg-2">
            <div className="cart-total">總金額為:{reduce}</div>
            <button className="btn btn-danger btn-lg btn-block" data-toggle="modal" data-target=".bd-example-modal-sm" onClick={() => this.checkOut(window.location.href = "/")} >結帳</button>
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

  getSum(total, num) {
    return total + num;
  }

  render() {
    // console.log(this.handleChange.selectId)
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

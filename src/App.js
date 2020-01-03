import React, { Component } from 'react'
import './App.css';

import ProductCard from "./components/ProductCard"
import ProductFakeData from "./products.json"

export default class App extends Component {
    state = {
      products: []
    }

  componentDidMount() {
    this.setState({products: ProductFakeData.products})
  }

  onUserRating = () => {
    alert('You have rated!');
  }

  onUserFavourited = () => {
    alert('You have faved!');
  }


  render() {
    const { products } = this.state;
    let productList = products.map((item, index) => {
      return <ProductCard key={index} item={item} userRating={this.onUserRating} userFavourited={this.onUserFavourited} />
    })
    return (
      <div className="topContainer">
        {productList}
      </div>
    )
  }
}

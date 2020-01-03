import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Products from "./products.json"
import Product from "./components/product"

 export default class App extends Component {
     state = {
      products: [],
    }

  componentDidMount(){
    this.setState({products: Products.products})
  }

  onStartRating = () => {
    alert('You have rated!');
  }

  handleFavClick = (e) => {
    alert('You have rated')
  }


  render() {
    const { products } = this.state
    let productList =  products.map((item, index) => {
    return <Product key={index} item={item} onStartRating={this.onStartRating} handleFavClick={this.handleFavClick.bind(this)}>{/* Children Props */}</Product>
     })
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Products</Text>

         <ScrollView horizontal={true}>
           {productList}
          </ScrollView>
      </View>
    )
  } 
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40, 
    fontWeight: "bold", 
    marginTop: 40, 
    textTransform: "capitalize"
  }
});

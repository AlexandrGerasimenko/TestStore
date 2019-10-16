import React from 'react';
import { connect } from 'react-redux';
import GoodCard from './goodCard'

let CartFeed = (p) => 
 
  <div className = 'good-carts'>
    {p.cart.map (good => <GoodCard good = {good} button = 'delete'/>)}
  </div>

let mapStateToProps = state => ({cart: state.cart})

let Cart = connect(mapStateToProps)(CartFeed)

export default Cart
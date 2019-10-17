import React from 'react';
import { connect } from 'react-redux';
import GoodCard from './goodCard'

let GoodsFeed = (p) => 
  <div className = 'good-carts'>
    {p.goods.map (good => <GoodCard good = {good} cart = {p.cart}/>)}
  </div>

let mapStateToProps = state => (
  {goods: state.goods.Apple,
    cart: state.cart
  }
)

let Goods = connect(mapStateToProps)(GoodsFeed)

export default Goods
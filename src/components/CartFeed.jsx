import React from 'react';
import { connect } from 'react-redux';
import GoodCard from './goodCard'
import {  Link } from 'react-router-dom';

let GoodsFeed = (p) => 
  <div className = 'good-carts'>
    { p.goods.length ? 
      p.goods.map (good => <GoodCard good = {good} button = 'delete'/>) : 
      <div className = 'emptyCart'>
        <div>Nothing added to cart</div>
        <div>Add some at  
          <Link to='/market'> market</Link></div>
      </div>
    }
  </div>

let mapStateToProps = state => ({goods: state.cart})

let Goods = connect(mapStateToProps)(GoodsFeed)

export default Goods
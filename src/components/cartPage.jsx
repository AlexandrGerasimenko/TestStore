import React from 'react';
import Header from './header'
import Goods from './CartFeed'

export default function CartPage() {
    return (
      <div >
        <Header/>
      <h1>cart</h1>
      <Goods/>
      </div>
    );
  }
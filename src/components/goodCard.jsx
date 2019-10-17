import React from 'react';
import store from '../reducers/index';
import {Link } from 'react-router-dom';

class GoodCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { cart: JSON.parse(localStorage.cart) }
        this.handleCart = this.handleCart.bind(this)
      }
    
      handleCart(e) {
        
        this.props.button ?
         store.dispatch({
            type: 'DELETE_GOOD',
            good: this.props.good
          }) : 
            this.props.cart.includes(this.props.good)  ? console.log() :
            store.dispatch({
              type: 'ADD_GOOD',
              good: this.props.good
            })
      }
    render(){
        return(
            <div className = 'good-cart'>
                <img src = {this.props.good.image}
                     alt = {this.props.good.model}/>
                <span>{this.props.good.name}</span>
                <span>{this.props.good.model}</span>
                <span>{this.props.good.price}</span>
                <button onClick = {this.handleCart}>
                  {this.props.button ?
                    "Delete from cart" : 
                      JSON.parse(localStorage.cart).length ? 
                          JSON.parse(localStorage.cart).map(item => item.model).includes(this.props.good.model) ? 
                            <Link to='/cart'>Go to cart</Link>:
                              'Add to cart' :'Add to cart' 
                  }
                </button>
                  
            </div>
        )
    }
    }

export default GoodCard
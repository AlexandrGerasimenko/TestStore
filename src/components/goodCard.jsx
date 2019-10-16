import React from 'react';
import store from '../reducers/index';
import {Link } from 'react-router-dom';

class GoodCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { cart: JSON.parse(localStorage.cart) }
        this.handleCart = this.handleCart.bind(this)
        // console.log(this.state);
       
      }
    
      handleCart(e) {
        let cart =JSON.parse(localStorage.cart)


        JSON.parse(localStorage.cart) ? JSON.parse(localStorage.cart).map(item => item.model).includes(this.props.good.model) ? console.log( ) : cart.push(this.props.good) :cart.push(this.props.good)
        
        this.props.button ?
         store.dispatch({
            type: 'DELETE_GOOD',
            good: this.props.good
          }) :
        store.dispatch({
            type: 'ADD_GOOD',
            good: this.props.good
          })

        // cart.push(this.props.good);
        console.log(cart); 
        console.log(' this.state: ',  this.state);
        localStorage.setItem('cart', JSON.stringify(cart))

      }
    render(props){
        return(
            <div className = 'good-cart'>
                <img src = {this.props.good.image}
                     alt = {this.props.good.model}/>
                <span>{this.props.good.name}</span>
                <span>{this.props.good.model}</span>
                <span>{this.props.good.price}</span>
                <button onClick = {this.handleCart}>
                {this.props.button ? "Delete from cart" : JSON.parse(localStorage.cart).length ? JSON.parse(localStorage.cart).map(item => item.model).includes(this.props.good.model) ? <Link to='/cart'>Go to cart</Link>:'Add to cart' :'Add to cart' }</button>
                  
            </div>
        )
    }
    }

export default GoodCard
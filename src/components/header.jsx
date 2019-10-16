import React from 'react'
import part from '../part.jpg'
import Logo from '../logo.js';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
class Header extends React.Component {
  
    render() {
        return (
            <header>
                <div className="pay">
                    <a href="#"><img src={part} />alt="Oplata"></a>
                </div>
                <div className="headerWrapper">
                    <div class="logo">
                        <div>
                            <i class="fa fa-phone" aria-hidden="true"></i>    0-800-12345678
                </div>
                        <div>
                        <Link to='/market'><Logo/></Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <ul>
                                <li><a href="#">RU|UA</a> </li>
                                <li><a href="#">Вопроы и отеты</a></li>
                                <li><a href="#">Доставка</a></li>
                                <li><a href="#">Гарантия</a></li>
                                <li><a href="#">Доставка и оплата</a></li>
                                <li><a href="#">Кредит</a></li>
                            </ul>
                        </div>
                        <div class="search">
                            <div>
                                <div>Город</div>
                                <div>
                                    <select name="city">
                                        <option value="Choose city">Выбирете город</option>
                                        <option value="Kuiv">Киев</option>
                                        <option value="Kharkov">Харьков</option>
                                        <option value="Lviv">Львов</option>
                                    </select>
                                </div>
                            </div>
                            <div class="goodSearch">
                                <i class="fa fa-search" aria-hidden="true"></i>
                                <input type="text" size="40" placeholder="Найти" />
                                <button>Найти</button>
                            </div>
                        </div>
                    </div>
                    <div class="hello">
                        <div>Приветствуем, {localStorage.login}
                        </div>
                        <div class="iconsWrapper">
                        <Link to='/market'>
                            <a href=""><div class="icons"><span><i class="fa fa-heart-o" aria-hidden="true"></i></span><span>Товары</span></div></a>
                            </Link>
                            
                            <a href="#"><div class="icons"><span id = 'counter'>{this.props.cart.length}</span><span>Количество в корзине</span></div></a>
                            {console.log(this.props)}
                            <Link to='/cart'>
                            <a href=""><div class="icons"><span><i class="fa fa-shopping-basket" aria-hidden="true"></i></span>
                                <span>
                                    Корзина
                                </span>
                            </div>
                            </a>
                            </Link>
                            <Link to='/login' onClick = {() => 
                            {localStorage.removeItem('login')
                            localStorage.removeItem('password')}
                        }>
                            <a href=""><div class="icons"><span><i class="fas fa-sign-out-alt"></i></span>
                                <span>
                                    Выход
                                </span>
                            </div>
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>

            </header>
        )
    }
}
let mapStateToProps = state => ({cart: state.cart})

let ConnectHeader = connect(mapStateToProps)(Header)
export default ConnectHeader
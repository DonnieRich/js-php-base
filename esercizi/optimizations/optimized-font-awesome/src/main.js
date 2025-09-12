import './style.css'
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import Collapse from 'bootstrap/js/dist/collapse';

library.add(faCartShopping, faHeart)

const cart = icon({ prefix: 'fas', iconName: 'cart-shopping' }).html
const heart = icon({ prefix: 'fas', iconName: 'heart' }).html

document.getElementById('cart').innerHTML = cart
document.getElementById('heart').innerHTML = heart
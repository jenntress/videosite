//FOR FUTURE DEVELOPMENT

import React, {Component} from 'react';
import Checkout from '../../components/Checkout/Checkout';
import {Cart} from '../../components';

class CartContainer extends Component {
	render(){
		return (
      <div>
        <div>
  				<Cart />
  			</div>
        <div>
        <Checkout
         name={"Test name"}
         description={"Test description"}
         amount={5}
        />
        </div>
      </div>
		)
	}
}

export default CartContainer;

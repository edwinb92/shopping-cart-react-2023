import CartItem from './components/CartItem';
import classes from './ShoppingCart.module.scss';
import OrderSummary from './components/OrderSummary';
import { Link } from 'react-router-dom';
import sslLogo from '/assets/images/ssl-image.jpg';
import { useCart } from '../../hooks/useCart';

const ShoppingCart = () => {
	const {cartItems, handleOnRemove, handleOnChangeQuantity} = useCart();

	return (
		<>
			<div className={classes['shopping-cart']}>
				<div className={classes['cart-list']}>
					<h3>My Cart</h3>
					<hr />
					{cartItems.length > 0 ? cartItems.map((product) => (
						<CartItem key={product.id}
							product={product}
							onRemoveItem={handleOnRemove}
							onChangeQuantity={(handleOnChangeQuantity)}
						></CartItem>
					)) : <div><h2>Your shopping cart is empty.</h2><p>Go to <Link to='/'>Catalog</Link> to add items to your cart</p></div> }
				</div>
				<div className={classes['order-total']}>
					<OrderSummary></OrderSummary>
				</div>
			</div>
			<img src={sslLogo} alt="" style={{marginTop: '3rem'}} />
		</>
	);
};
export default ShoppingCart;

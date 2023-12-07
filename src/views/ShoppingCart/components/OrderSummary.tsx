import { Product } from '../../../entities/product';
import { useSelector } from 'react-redux';
import classes from './OrderSummary.module.scss';
import padLockLocked from '/assets/images/padlock-locked.png';
import { RootState } from '../../../redux/reducers';

const OrderSummary = () => {
	const cartItems: Array<Product> = useSelector(
		(state: RootState) => state.cart.cartItems
	);

	const getOrderSubtotal = () => {
		const total = cartItems.reduce((acumulador, product) => acumulador + product.total, 0);

		return `₡${total.toFixed(2)}`;
	};

	return (
		<div className={classes['order-summary']}>
			<h3>Order Summary</h3>
			<hr />
			<p>
				<span>Subtotal</span>
				<span>{getOrderSubtotal()}</span>
			</p>
			<button disabled={cartItems.length === 0}>
				<img src={padLockLocked} alt="" />
				Checkout
			</button>
		</div>
	);
};
export default OrderSummary;

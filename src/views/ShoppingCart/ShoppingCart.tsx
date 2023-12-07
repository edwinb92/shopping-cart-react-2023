import { Product } from '../../entities/product';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './components/CartItem';
import classes from './ShoppingCart.module.scss';
import OrderSummary from './components/OrderSummary';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/reducers';
import sslLogo from '/assets/images/ssl-image.jpg';

const ShoppingCart = () => {
	const cartItems: Array<Product> = useSelector(
		(state: RootState) => state.cart.cartItems
	);
	const dispatch = useDispatch();

	const handleOnChangeQuantity = (id: number, quantity: number) => {
		const newList = [...cartItems];
		
		const itemIndex = newList.findIndex((item) => item.id === id);

		if (itemIndex !== -1) {
			const newProduct = {...newList[itemIndex]};
			newProduct.quantity = quantity;
			newProduct.total = newProduct.quantity * newProduct.price;

			newList[itemIndex] = newProduct;
		}

		dispatch({ type: 'SET_CARTITEMS', payload: newList });
	};

	const handleOnRemove = (id: number) => {
		let newList = [...cartItems];

		newList = newList.filter((product) => product.id !== id);

		dispatch({ type: 'SET_CARTITEMS', payload: newList });
	};

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
							onChangeQuantity={handleOnChangeQuantity}
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

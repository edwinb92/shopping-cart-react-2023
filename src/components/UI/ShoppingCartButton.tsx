import { useSelector } from 'react-redux';
import { Product } from '../../entities/product';
import classes from './ShoppingCartButton.module.scss';
import { Link } from 'react-router-dom';
import shoppingCartIcon from '../../assets/images/shopping-cart-icon.png';
import { useEffect, useState } from 'react';
import { RootState } from '../../redux/reducers';

const ShoppingCartButton = () => {
	const [isRotated, setIsRotated] = useState(false);
	const cartItems: Array<Product> = useSelector(
		(state: RootState) => state.cart.cartItems
	);

	const getTotalItems = () => {
		const totalItems = cartItems.reduce(
			(acumulador, product) => acumulador + product.quantity,
			0
		);

		return totalItems;
	};

	useEffect(() => {
		setIsRotated((prevIsRotated) => !prevIsRotated);
	}, [cartItems])

	return (
		<>
			<Link className={classes['cart-items']} to='/shopping-cart'>
				<img
					className={isRotated ? classes['rotate'] : ''}
					src={shoppingCartIcon}
					alt=''
				/>
				<div className={classes['cart-items-counter']}>{getTotalItems()}</div>
			</Link>
		</>
	);
};
export default ShoppingCartButton;

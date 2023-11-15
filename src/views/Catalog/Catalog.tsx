import { PRODUCT_LIST } from '../../constants/sampleData';
import ProductItem from './components/ProductItem';
import classes from './Catalog.module.scss';
import { Product } from '../../entities/product';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';

const Catalog = () => {
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const dispatch = useDispatch();

	const handleAddToCart = (product: Product) => {
		const newList = [...cartItems];

		const itemIndex = newList.findIndex((item) => item.id === product.id);

		if (itemIndex !== -1) {
			const newProduct = { ...newList[itemIndex] };
			newProduct.quantity = newProduct.quantity + 1;
			newProduct.total = newProduct.quantity * newProduct.price;

			newList[itemIndex] = newProduct;
		} else {
			const newProduct = { ...product };
			newProduct.quantity = newProduct.quantity + 1;
			newProduct.total = newProduct.quantity * newProduct.price;

			newList.push(newProduct);
		}

		dispatch({ type: 'SET_CARTITEMS', payload: newList });
	};

	return (
		<>
			<h3>Catalog</h3>
			<hr />
			<div className={classes['catalog']}>
				{PRODUCT_LIST.map((product) => (
					<div className={classes['product']} key={product.id}>
						<ProductItem
							product={product}
							onAddToCart={handleAddToCart}
						></ProductItem>
					</div>
				))}
			</div>
		</>
	);
};
export default Catalog;

import { PRODUCT_LIST } from '../../constants/sampleData';
import ProductItem from './components/ProductItem';
import classes from './Catalog.module.scss';
import { useCart } from '../../hooks/useCart';

const Catalog = () => {
	const {handleAddToCart} = useCart();

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

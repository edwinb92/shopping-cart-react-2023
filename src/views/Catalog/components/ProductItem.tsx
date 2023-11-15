import AddToCartButton from '../../../components/UI/AddToCartButton';
import Card from '../../../components/UI/Card';
import { Product } from '../../../entities/product';
import classes from './ProductItem.module.scss';

export interface ProductProps {
	product: Product,
	onAddToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductProps> = (props) => {
	return (
		<>
			<Card>
				<div className={`${classes.product}`}>
					<div>
						<img src={props.product.image} alt='' />
					</div>
					<div className={classes.description}>
						<p>{props.product.description}</p>
						<span>₡{props.product.price.toFixed(2)}</span> 
					</div>
					<AddToCartButton onClick={() => {props.onAddToCart(props.product);}} ></AddToCartButton>
				</div> 
			</Card>
		</>
	);
};

export default ProductItem;  

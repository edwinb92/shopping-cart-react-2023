import { Product } from '../../../entities/product';
import classes from './CartItem.module.scss';
import closeIcon from '../../../assets/images/close-icon.png';
import InputQty from '../../../components/UI/InputQty';

export interface ProductProps {
	product: Product;
	onRemoveItem: (id: number) => void;
	onIncrement: (id: number) => void;
	onDecrement: (id: number) => void;
}

const CartItem: React.FC<ProductProps> = (props) => {
	return (
		<>
			<div className={classes['shopping-cart-item']}>
				<img
					className={classes['item-image']}
					src={props.product.image}
					alt='Nombre del artículo'
				/>
				<div className={classes['item-details']}>
					<div>
						<h3 className={classes['item-name']}>
							{props.product.description}
						</h3>
						<p className={classes['item-price']}>
							₡{props.product.price.toFixed(2)}
						</p>
						<InputQty
							onIncrement={props.onIncrement}
							onDecrement={props.onDecrement}
							quantity={props.product.quantity}
							id={props.product.id}
						></InputQty>
						
					</div>
					<span className={classes['total-price']}>
						₡{props.product.total.toFixed(2)}
					</span>
				</div>
				<div className={classes['item-actions']}>
					<img
						className={classes['remove-item-button']}
						onClick={() => props.onRemoveItem(props.product.id)}
						src={closeIcon}
					></img>
				</div>
			</div>
		</>
	);
};
export default CartItem;

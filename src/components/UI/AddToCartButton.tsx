import React from 'react';
import classes from './AddToCartButton.module.scss';

export interface AddToCartButtonProps {
	onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = (props) => {
	return (
		<>
			<button className={classes['add-to-cart-btn']} onClick={props.onClick}>Add to Cart</button>
		</>
	);
};
export default AddToCartButton;

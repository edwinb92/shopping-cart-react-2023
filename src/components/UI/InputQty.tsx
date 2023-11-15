import { useEffect, useState } from 'react';
import classes from './InputQty.module.scss';

export interface InputQtyProps {
	onChangeQuantity: (id: number, quantity: number) => void;
	quantity: number,
	id: number
}

const QtyInput: React.FC<InputQtyProps> = (props) => {
	const [quantity, setQuantity] = useState(props.quantity);

	const handleOnTypeNewQuantity = (value: string) => {
		let newValue = parseInt(value === '' ? '1' : value);
		if(isNaN(newValue)){
			newValue = 1;
		}
		setQuantity(newValue);
	}

	const handleOnDecrement = () => {
		setQuantity(props.quantity - 1);
	}

	const handleOnIncrement = () => {
		setQuantity(props.quantity + 1);
	}

	useEffect(()=>{
		props.onChangeQuantity(props.id, quantity);
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [quantity])

	return (
		<>
			<div className={classes['qty-input']}>
				<button
					disabled={props.quantity === 1}
					onClick={handleOnDecrement}
				>-</button>
				<input
					type='number'
					value={quantity}
					onChange={(event) => handleOnTypeNewQuantity(event.target.value) }
				/>
				<button onClick={handleOnIncrement}>+</button>
			</div>
		</>
	);
};
export default QtyInput;

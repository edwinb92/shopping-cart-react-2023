import classes from './InputQty.module.scss';

export interface InputQtyProps {
	onIncrement: (id: number) => void;
	onDecrement: (id: number) => void;
	quantity: number,
	id: number
}

const QtyInput: React.FC<InputQtyProps> = (props) => {
	return (
		<>
			<div className={classes['qty-input']}>
				<button
					disabled={props.quantity === 1}
					onClick={() => props.onDecrement(props.id)}
				>-</button>
				<input
					type='number'
					value={props.quantity}
				/>
				<button onClick={() => props.onIncrement(props.id)}>+</button>
			</div>
		</>
	);
};
export default QtyInput;

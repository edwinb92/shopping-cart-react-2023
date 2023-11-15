import { ReactNode } from 'react';
import classes from './Card.module.scss';

export interface CardProps {
	children: ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
	return <div className={classes.card}>{props.children}</div>;
};

export default Card;

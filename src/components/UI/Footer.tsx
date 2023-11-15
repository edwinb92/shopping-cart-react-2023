import classes from './Footer.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<div className={classes['links']}>
				<ul style={{ textAlign: 'left' }}>
					<li>
						<Link to='/shopping-cart'>Shopping Cart</Link>
					</li>
					<li>
						<Link to='/'>Catalog</Link>
					</li>
				</ul>
				<div></div>
			</div>
			<div className={classes['created-by']}>Created by: Edwin Barrantes</div>
		</footer>
	);
}

export default Footer;

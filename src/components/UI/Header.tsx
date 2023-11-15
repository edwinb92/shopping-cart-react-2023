import classes from './Header.module.scss';
import logoImage from '../../assets/images/logoRAW.png';
import ShoppingCartButton from '../../components/UI/ShoppingCartButton';

function Header() {
	return (
		<header>
			<div className={classes['header']}></div>
			<div className={classes['logo-link']}>
				<img src={logoImage} alt='' width='100px' height='80px' />
				<ShoppingCartButton></ShoppingCartButton>
			</div>
		</header>
	);
}

export default Header;

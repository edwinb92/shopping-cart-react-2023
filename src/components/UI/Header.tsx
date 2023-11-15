import classes from './Header.module.scss';
import logoImage from '../../assets/images/logo.png';
import ShoppingCartButton from '../../components/UI/ShoppingCartButton';

function Header() {
	return (
		<header>
			<div className={classes['header']}></div>
			<div className={classes['logo-link']}>
				<img src={logoImage} alt='' width='50px' height='20px' />
				<ShoppingCartButton></ShoppingCartButton>
			</div>
		</header>
	);
}

export default Header;

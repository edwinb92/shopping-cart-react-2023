import './App.scss';
import Catalog from './views/Catalog/Catalog';
import logoImage from '../src/assets/images/logo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShoppingCart from './views/ShoppingCart/ShoppingCart';
import ShoppingCartButton from './components/UI/ShoppingCartButton';

function App() {
	return (
		<Router>
			<div className='wrapper'>
				<header>
					<div className='header'></div>
					<div className='logo-link'>
						<img
							src={logoImage}
							alt=''
							width='50px'
							height='20px'
						/>
						<ShoppingCartButton></ShoppingCartButton>
					</div>
				</header>
				<div className='content'>
					<Routes>
						<Route path='' element={<Catalog />} />
						<Route path='/shopping-cart' element={<ShoppingCart />} />
					</Routes>
				</div>
				<div className='footer'>
					<div className='links'>
						<ul style={{textAlign:'left'}}>
							<li>
								<Link to='/shopping-cart'>Shopping Cart</Link>
							</li>
							<li>
								<Link to='/'>Catalog</Link>
							</li>
						</ul>
						<div></div>
					</div>
					<div className='created-by'>
						Created by: Edwin Barrantes
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;

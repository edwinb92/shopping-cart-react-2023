import './App.scss';
import Catalog from './views/Catalog/Catalog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingCart from './views/ShoppingCart/ShoppingCart';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';

function App() {
	return (
		<Router>
			<div className='wrapper'>
				<Header></Header>
				<div className='content'>
					<Routes>
						<Route path='' element={<Catalog />} />
						<Route path='/shopping-cart' element={<ShoppingCart />} />
					</Routes>
				</div>
				<Footer></Footer>
			</div>
		</Router>
	);
}

export default App;

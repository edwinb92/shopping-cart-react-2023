import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Catalog from './Catalog';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

const initialState = {
	cart: {
		cartItems: [],
	},
};

const store = mockStore(initialState);

test('renders the component', () => {
	render(
		<Provider store={store}>
			<Catalog />
		</Provider>
	);
	const titleElement = screen.getByText('Catalog');
	expect(titleElement).toBeInTheDocument();
});

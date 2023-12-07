import { Product } from '../../entities/product';

interface stateType {
	cartItems: Array<Product>
}

export interface SetCartItemsAction {
	type: string;
	payload: Array<Product>;
  }
const initialState: stateType = {
	cartItems: [],
};

const counterReducer = (state = initialState, action: SetCartItemsAction) => {
	switch (action.type) {
	case 'SET_CARTITEMS':
		return {
			...state,
			cartItems: action.payload as Array<Product>,
		};
	default:
		return state;
	}
};

export default counterReducer;

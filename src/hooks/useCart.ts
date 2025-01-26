import { useSelector, useDispatch } from 'react-redux';
import { Product } from '../entities/product';
import { RootState } from '../redux/reducers';

export function useCart() {
    const cartItems: Array<Product> = useSelector(
        (state: RootState) => state.cart.cartItems
    );
    const dispatch = useDispatch();

    const handleOnRemove = (id: number) => {
        let newList = [...cartItems];

        newList = newList.filter((product) => product.id !== id);

        dispatch({ type: 'SET_CARTITEMS', payload: newList });
    };

    const handleOnChangeQuantity = (id: number, quantity: number) => {
        const newList = [...cartItems];

        const itemIndex = newList.findIndex((item) => item.id === id);

        if (itemIndex !== -1) {
            const newProduct = { ...newList[itemIndex] };
            newProduct.quantity = quantity;
            newProduct.total = newProduct.quantity * newProduct.price;

            newList[itemIndex] = newProduct;
        }

        dispatch({ type: 'SET_CARTITEMS', payload: newList });
    };

    const handleAddToCart = (product: Product) => {
        const newList = [...cartItems];

        const itemIndex = newList.findIndex((item) => item.id === product.id);

        if (itemIndex !== -1) {
            const newProduct = { ...newList[itemIndex] };
            newProduct.quantity = newProduct.quantity + 1;
            newProduct.total = newProduct.quantity * newProduct.price;

            newList[itemIndex] = newProduct;
        } else {
            const newProduct = { ...product };
            newProduct.quantity = newProduct.quantity + 1;
            newProduct.total = newProduct.quantity * newProduct.price;

            newList.push(newProduct);
        }

        dispatch({ type: 'SET_CARTITEMS', payload: newList });
    };

    return { cartItems, handleOnRemove, handleOnChangeQuantity, handleAddToCart }
}
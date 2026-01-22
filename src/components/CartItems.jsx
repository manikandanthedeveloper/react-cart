import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems = () => {
	const { cartItems } = useSelector((store) => store.cart);

	if (!cartItems || cartItems.length === 0) {
		return null;
	}

	return (
		<div className="divide-y divide-gray-200 items">
			{cartItems.map((item) => (
				<CartItem key={item.id} {...item} />
			))}
		</div>
	);
};

export default CartItems;

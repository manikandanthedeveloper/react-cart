import { useSelector } from "react-redux";
import CartContainer from "../components/CartContainer";

const CartPage = () => {
	const { cartItems } = useSelector((store) => store.cart);

	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						Shopping Cart
					</h1>
					<p className="text-gray-600">
						{cartItems.length}{" "}
						{cartItems.length === 1 ? "item" : "items"} in your cart
					</p>
				</div>
				<CartContainer />
			</div>
		</div>
	);
};

export default CartPage;

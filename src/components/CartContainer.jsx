import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import OrderSummary from "./OrderSummary";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
	const { cartItems } = useSelector((store) => store.cart);
	const dispatch = useDispatch();

	if (cartItems.length === 0) {
		return <EmptyCart />;
	}

	return (
		<div className="lg:grid lg:grid-cols-12 lg:gap-8">
			{/* Cart Items */}
			<div className="lg:col-span-8">
				<div className="bg-white rounded-lg shadow-sm">
					<div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
						<h2 className="text-lg font-semibold text-gray-900">
							Cart Items
						</h2>
						<button
							onClick={() => dispatch(openModal())}
							className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors cursor-pointer"
						>
							Clear Cart
						</button>
					</div>
					<CartItems />
				</div>
			</div>

			{/* Order Summary */}
			<OrderSummary />
		</div>
	);
};

export default CartContainer;

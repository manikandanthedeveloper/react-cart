import { useSelector } from "react-redux";

const OrderSummary = () => {
	const { total } = useSelector((store) => store.cart);

	return (
		<div className="lg:col-span-4 mt-8 lg:mt-0">
			<div className="bg-white rounded-lg shadow-sm sticky top-8">
				<div className="px-6 py-4 border-b border-gray-200">
					<h2 className="text-lg font-semibold text-gray-900">
						Order Summary
					</h2>
				</div>
				<div className="px-6 py-4 space-y-4">
					<div className="flex justify-between text-sm">
						<span className="text-gray-600">Subtotal</span>
						<span className="font-medium text-gray-900">
							${total.toFixed(2)}
						</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-gray-600">Shipping</span>
						<span className="font-medium text-gray-900">Free</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-gray-600">Tax (10%)</span>
						<span className="font-medium text-gray-900">
							${(total * 0.1).toFixed(2)}
						</span>
					</div>
					<div className="border-t border-gray-200 pt-4">
						<div className="flex justify-between">
							<span className="text-base font-semibold text-gray-900">
								Total
							</span>
							<span className="text-base font-semibold text-gray-900">
								${(total * 1.1).toFixed(2)}
							</span>
						</div>
					</div>
				</div>
				<div className="px-6 py-4">
					<button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md font-medium hover:bg-indigo-700 transition-colors mb-3">
						Checkout
					</button>
					<button className="w-full bg-white text-gray-700 py-3 px-4 rounded-md font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
						Continue Shopping
					</button>
				</div>
				<div className="px-6 py-4 bg-gray-50 rounded-b-lg">
					<div className="flex items-center text-sm text-gray-600">
						<svg
							className="h-5 w-5 mr-2 text-green-600"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						Secure checkout
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;

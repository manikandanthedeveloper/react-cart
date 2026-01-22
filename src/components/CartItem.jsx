import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

const CartItem = ({ id, title, price, img, amount }) => {
	const dispatch = useDispatch();
	const itemTotal = (parseFloat(price) * amount).toFixed(2);

	return (
		<div className="p-6 hover:bg-gray-50 transition-colors item">
			<div className="flex items-center gap-6">
				{/* Product Image */}
				<div className="shrink-0">
					<img
						src={img}
						alt={title}
						className="h-24 w-24 object-contain rounded-lg bg-gray-100 p-2"
					/>
				</div>

				{/* Product Details */}
				<div className="flex-1 min-w-0">
					<h3 className="text-lg font-medium text-gray-900 mb-1 capitalize">
						{title}
					</h3>
					<p className="text-sm text-gray-500 mb-3">
						Price: ${parseFloat(price).toFixed(2)}
					</p>

					{/* Quantity Controls */}
					<div className="flex items-center gap-3">
						<button
							onClick={() => dispatch(decrease({ id }))}
							disabled={amount <= 1}
							className="h-8 w-8 bg-indigo-600 text-white rounded-md flex items-center justify-center hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
							aria-label="Decrease quantity"
						>
							<svg
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M20 12H4"
								/>
							</svg>
						</button>
						<span className="text-base font-medium text-gray-900 w-12 text-center">
							{amount}
						</span>
						<button
							onClick={() => dispatch(increase({ id }))}
							className="h-8 w-8 bg-indigo-600 text-white rounded-md flex items-center justify-center hover:bg-indigo-700 transition-colors cursor-pointer"
							aria-label="Increase quantity"
						>
							<svg
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 4v16m8-8H4"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Item Total & Remove */}
				<div className="flex flex-col items-end gap-4">
					<p className="text-lg font-semibold text-gray-900">
						${itemTotal}
					</p>
					<button
						onClick={() => dispatch(removeItem(id))}
						className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1 transition-colors cursor-pointer"
						aria-label="Remove item"
					>
						<svg
							className="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;

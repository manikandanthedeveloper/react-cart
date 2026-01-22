const EmptyCart = () => {
	return (
		<div className="bg-white rounded-lg shadow-sm p-12 text-center">
			<svg
				className="mx-auto h-24 w-24 text-gray-400 mb-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
				/>
			</svg>
			<h3 className="text-xl font-medium text-gray-900 mb-2">
				Your cart is empty
			</h3>
			<p className="text-gray-500 mb-6">Add items to get started</p>
			<button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
				Continue Shopping
			</button>
		</div>
	);
};

export default EmptyCart;

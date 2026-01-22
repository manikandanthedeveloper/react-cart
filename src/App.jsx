import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImSpinner9 } from "react-icons/im";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import getCartItems from "./features/cart/thunk/getCartItems";
import { calculateTotals } from "./features/cart/cartSlice";
import ClearCartModal from "./components/ClearCartModal";

const App = () => {
	const { cartItems, isLoading } = useSelector((store) => store.cart);
	const { isOpen } = useSelector((store) => store.modal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCartItems("random"));
	}, []);

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems]);

	return (
		<main>
			<Navbar />
			{isLoading ? (
				<h2 className="text-center text-2xl font-semibold mt-20">
					<ImSpinner9 className="inline-block animate-spin mr-2" />
					Loading...
				</h2>
			) : (
				<CartPage />
			)}
			{isOpen && <ClearCartModal />}
		</main>
	);
};

export default App;

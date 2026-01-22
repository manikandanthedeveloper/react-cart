import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import styles from "./MiniCart.module.css";

const MiniCart = () => {
	const { cartItems } = useSelector((store) => store.cart);

	if (cartItems.length === 0) {
		return <EmptyCart />;
	}

	return (
		<div className={`card-body p-2 ${styles.miniCartBody}`}>
			<CartItems items={cartItems} />
			<div className="card-actions">
				<button className="btn bg-indigo-600 text-white btn-block">
					View cart
				</button>
			</div>
		</div>
	);
};

export default MiniCart;

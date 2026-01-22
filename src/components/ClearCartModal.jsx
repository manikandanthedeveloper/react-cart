import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const ClearCartModal = () => {
	const { isOpen } = useSelector((store) => store.modal);
	const dispatch = useDispatch();

	return (
		<dialog
			id="my_modal_2"
			className={`modal z-100 ${isOpen ? "modal-open" : ""}`}
		>
			<div className="modal-box">
				<h3 className="font-bold text-lg capitalize">
					remove all items from your shopping cart?
				</h3>
				<div className="modal-action">
					<form method="dialog">
						<button
							className="btn bg-red-800 text-white mr-2"
							onClick={() => {
								dispatch(clearCart());
								dispatch(closeModal());
							}}
						>
							Clear Cart
						</button>
						<button
							className="btn bg-green-800 text-white"
							onClick={() => dispatch(closeModal())}
						>
							Close
						</button>
					</form>
				</div>
			</div>
		</dialog>
	);
};

export default ClearCartModal;

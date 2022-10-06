import { useContext } from "react";
import styles from "./NavBar.module.css";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
	const { totalQty } = useContext(CartContext);
	return (
		<div className={styles.cartWidget}>
			<span className={"material-symbols-outlined"}>shopping_cart</span>
			<span>{totalQty() === 0 ? "" : totalQty()}</span>
		</div>
	);
};

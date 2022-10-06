import React from "react";
import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = (items) => {
	return (
		<div className={styles.itemLists}>
			{items.items.map((item) => (
				<Item
					item={item}
					key={item.id}
				/>
			))}
		</div>
	);
};

export default ItemList;

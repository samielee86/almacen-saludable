import React, { useState, useEffect } from "react";
import styles from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemListContainer = (props) => {
	const [items, setItems] = useState([]);
	const { categoryName } = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const productCollection = collection(db, "products");
		const productsToShow = categoryName
			? query(productCollection, where("category", "==", categoryName))
			: productCollection;
		getDocs(productsToShow)
			.then((res) => {
				const products = res.docs.map((product) => {
					return {
						id: product.id,
						...product.data(),
					};
				});
				setItems(products);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [categoryName]);

	return (
		<div>
			{loading ? (
				<h2>Loading...</h2>
			) : (
				<>
					<h2 className={styles.h2}>{props.title}</h2>
					<ItemList items={items} />
				</>
			)}
		</div>
	);
};

export default ItemListContainer;

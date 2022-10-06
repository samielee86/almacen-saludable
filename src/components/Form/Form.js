import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import styles from "./Form.module.css";

const Form = ({ cart, total, clear, handleOrderID }) => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [repEmail, setRepEmail] = useState("");

	const handleSubmit = (e) => {
		if (email === repEmail) {
			e.preventDefault();
			const order = {
				buyer: { name, phone, email },
				cart: cart,
				total: total,
				date: serverTimestamp(),
			};
			const ordersCollection = collection(db, "orders");

			addDoc(ordersCollection, order)
				.then((res) => {
					handleOrderID(res.id);
					clear();
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			e.preventDefault();
			alert("Los e-mails ingresados no coinciden");
		}
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handleRepEmailChange = (e) => {
		setRepEmail(e.target.value);
	};

	return (
		<form action="" onSubmit={handleSubmit} className={styles.container}>
			<input
				type="text"
				placeholder="Nombre"
				name="name"
				value={name}
				onChange={handleNameChange}
			/>
			<input
				type="number"
				placeholder="Nro. Tel/Móvil"
				name="phone"
				value={phone}
				onChange={handlePhoneChange}
			/>
			<input
				type="email"
				placeholder="E-mail"
				name="email"
				value={email}
				onChange={handleEmailChange}
			/>
			<input
				type="email"
				placeholder="Repetir E-mail"
				name="repEmail"
				value={repEmail}
				onChange={handleRepEmailChange}
			/>
			<button className={styles.buyButton}>Comprar</button>
		</form>
	);
};

export default Form;

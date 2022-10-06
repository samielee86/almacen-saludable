import React from "react";
import styles from "./Main.module.css";

const Banner = () => {
	return (
		<div className={styles.banner}>
			<img
				src="https://res.cloudinary.com/dhwlnxbib/image/upload/v1662472769/Almacen%20Saludable/brooke-lark-08bOYnH_r_E-unsplash_x1atka.jpg"
				alt=""
				width="100%"
			/>
			<div className={styles.leyendasContainer}>
				<p className={styles.leyenda1}>PRODUCTOS ORGÁNICOS</p>
				<h2 className={styles.leyenda2}>
					Ingredientes Frescos y Saludables,{" "}
					<span>lo mejor para tus recetas!</span>
				</h2>
				<p className={styles.leyenda3}>
					Suscribite a nuestro newsletter para enterarte de las
					ofertas semanales!
				</p>
			</div>
		</div>
	);
};

export default Banner;

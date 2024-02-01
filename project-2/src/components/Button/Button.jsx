import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = ({ primaryButton, text, icon, ...rest }) => {


	// props = { text: "" , icon : ""}

	return (
		<button {...rest} className={primaryButton == true ? styles.primaryButton : styles.secondaryButton}>
			{icon}
			{text}
		</button>

	)
}

export default Button
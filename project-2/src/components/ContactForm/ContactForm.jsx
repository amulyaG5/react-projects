
import styles from "./ContactForm.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import girlContact from "../../assets/service-contact.svg"



import Button from "../Button/Button"
import { useState } from "react";




const ContactForm = () => {


	const [names, setNames] = useState("amulya mallya")
	const [mails, setMails] = useState("amulyaprabhu1997@gmail.com")
	const [texts, setTexts] = useState("hi guyssssssss wasssp?")

	const onSubmitForm = (event) => {
		event.preventDefault()

		setNames(event.target[0].value)
		setMails(event.target[1].value)
		setTexts(event.target[2].value)

		console.log(names, mails, texts)




	}







	return (
		<div className={styles.container}>
			<div className={styles.contactForm}>
				<div className={`${styles.buttonContainer} container`}>
					<Button
						primaryButton={true}
						text="VIA SUPPORT CHAT" icon={< MdOutlineMessage style={{ width: "24px", height: "24px" }} />}
					/>

					<Button
						primaryButton={true}
						text="VIA CALL" icon={< IoIosCall style={{ width: "24px", height: "24px" }} />}
					/>
				</div>

				<div style={{ marginTop: "32px" }}>
					<Button
						primaryButton={false}
						text="VIA EMAIL FORM" icon={< MdOutlineMessage style={{ width: "24px", height: "24px" }} />}

					/>

				</div>

				<form
					onSubmit={onSubmitForm}

				>
					<div className={styles.formContainer}>
						<label htmlFor="name">Name</label>
						<input type="text" name="name" />

					</div>


					<div className={styles.formContainer}>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" />

					</div>

					<div className={styles.formContainer}>
						<label htmlFor="text">Text</label>
						<textarea name="text" rows="8" />

					</div>

					<div style={{ display: "flex", justifyContent: "end", marginTop: "17px" }}>
						<Button
							primaryButton={true}
							text="SUBMIT"
						/>

					</div>
					<div>{names + " " + mails + " " + texts}</div>





				</form>



			</div>
			<div className='{styles.contactImage}'>
				<img src={girlContact} alt="girl-contatc" />

			</div>

		</div>
	)
}

export default ContactForm
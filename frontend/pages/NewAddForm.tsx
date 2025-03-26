import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type category = {
	id: number;
	title: string;
};

type Inputs = {
	title: string;
	owner: string;
	description: string;
	price: number;
	img: string;
	city: string;
	date: Date;
	category: number;
};

function NewAddForm() {
	const [categories, setCategories] = useState<category[]>([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const result = await axios.get<category[]>(
				"http://localhost:3000/categories",
			);
			setCategories(result.data);
		};
		fetchCategories();
	}, []);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (data) =>
		await axios.post("http://localhost:3000/ads", data);

	return (
		//-------------- AVEC UTILISATION DE REACT HOOK FORM ---------------

		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				Titre de l'annonce :
				<input
					defaultValue="Appartement"
					{...register("title", { required: true })}
				/>
			</label>
			<br />
			<label>
				<input
					defaultValue="Jane Doe"
					{...register("owner", { required: true })}
				/>
			</label>
			<br />
			<label>
				<input
					defaultValue="Appartement de 50m2"
					{...register("description", { required: true })}
				/>
			</label>
			<br />
			<label>
				<input
					type="number"
					defaultValue="700"
					{...register("price", { required: true })}
				/>
			</label>
			<br />
			<label>
				<input
					defaultValue="26/03/2025"
					{...register("date", { required: true })}
				/>
			</label>
			<br />
			<label>
				<input
					defaultValue="https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/framboises-scaled-e1644263837892.jpg"
					{...register("img", { required: true })}
				/>
			</label>
			<br />
			<label>
				<input defaultValue="Lille" {...register("city", { required: true })} />
			</label>
			<br />
			<select name="category">
				{categories.map((category: category) => (
					<option key={category.id} value={category.id}>
						{category.title}
					</option>
				))}
			</select>

			<input type="submit" />
		</form>

		// -------------- SANS UTILISATION DE REACT HOOK FORM ----------------

		// <form
		// 	onSubmit={(e) => {
		// 		e.preventDefault();
		// 		const form = e.target;
		// 		const formData = new FormData(form as HTMLFormElement);

		// 		const formJson = Object.fromEntries(formData.entries());
		// 		axios.post("http://localhost:3000/ads", formJson);
		// 	}}
		// >
		// 	<label>
		// 		Nom de la nouvelle annonce :
		// 		<input
		// 			className="text-field"
		// 			name="title"
		// 			defaultValue={"Appartement"}
		// 		/>{" "}
		// 	</label>{" "}
		// 	<br />
		// 	<label>
		// 		Nom du vendeur :
		// 		<input
		// 			className="text-field"
		// 			name="owner"
		// 			defaultValue={"Jane Doe"}
		// 		/>{" "}
		// 	</label>{" "}
		// 	<br />
		// 	<label>
		// 		Description de la nouvelle annonce :
		// 		<input
		// 			className="text-field"
		// 			name="description"
		// 			defaultValue={"30m2"}
		// 		/>{" "}
		// 	</label>{" "}
		// 	<br />
		// 	<label>
		// 		Prix de la nouvelle annonce :
		// 		<input className="text-field" name="price" defaultValue={"800"} />{" "}
		// 	</label>{" "}
		// 	<br />
		// 	<label>
		// 		Image de la nouvelle annonce :
		// 		<input
		// 			className="text-field"
		// 			name="img"
		// 			defaultValue={
		// 				"https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/framboises-scaled-e1644263837892.jpg"
		// 			}
		// 		/>{" "}
		// 	</label>{" "}
		// 	<br />
		// 	<label>
		// 		Localisation :
		// 		<input className="text-field" name="city" defaultValue={"Lille"} />{" "}
		// 	</label>{" "}
		// 	<br />
		// 	<label>
		// 		Date de la création :
		// 		<input
		// 			className="text-field"
		// 			name="date"
		// 			defaultValue={"2025/03/26"}
		// 		/>{" "}
		// 	</label>{" "}
		// 	<br />
		// 	<select name="category">
		// 		{categories.map((category: category) => (
		// 			<option key={category.id} value={category.id}>
		// 				{category.title}
		// 			</option>
		// 		))}
		// 	</select>
		// 	<br />
		// 	<button type="submit" className="button">
		// 		Publier
		// 	</button>
		// </form>
	);
}

export default NewAddForm;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	name: yup.string("Name must be string!!").required("fsdfsdfds"),
	id: yup.number("id must be number!!").required("fsdfd").min(8, "dsadsdsadsa"),
});
const AddUser = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: { name: "hema", id: 55 },
		resolver: yupResolver(schema),
	});

	watch("name");
	const onSubmit = (data) => console.log(data, errors);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* register your input into the hook by invoking the "register" function */}
			<input {...register("name")} />
			<p>{errors?.name?.message}</p>

			{/* include validation with required or other standard HTML validation rules */}
			<input {...register("id", { required: true })} />
			<p>{errors?.id?.message}</p>
			{/* errors will return when field validation fails  */}
			{errors.exampleRequired && <span>This field is required</span>}

			<input type="submit" />
		</form>
	);
};

export default AddUser;

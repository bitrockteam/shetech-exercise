import React, {useState} from "react";
import "./index.css";
import Input from "../Field/Input";
import Faces from "../Field/Faces";

const defaultForm = { name: "", age: "" };

const Feedback = ({ setFeedbackList }) => {
	const [form, setForm] = useState(defaultForm);

	const updateField = (field, value) => {
		console.log(field, value);
		setForm(f => ({...f, [field]: value }));
	};

	const saveFeedback = () => {
		setFeedbackList(f => ([...f, form]));
		setForm(defaultForm);
		alert('Feedback sent!')
	};

	return (
		<div className="feedback">
			<form>
				<span className="form-title">
					Give Us Your Feedback!
				</span>

				<Input name="name" label="NAME" value={form.name} onChange={updateField} />
				<Faces name="result" value={form.result} onChange={updateField} />

				<div className="actions">
					<button className="form-btn" type="button" disabled={!form.name || !form.result} onClick={saveFeedback}>
					Send
					</button>
				</div>
			</form>
		</div>
	);};

export default Feedback;

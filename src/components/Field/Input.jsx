import React from "react";
import "./index.css";

const Input = ({ name, value, label, onChange }) => (
	<div className="wrap-input">
		<label htmlFor={name}>{label}</label>
		<input className="input" value={value} type="text" name={name} onChange={e => onChange(name, e.target.value)} />
	</div>
);

export default Input;

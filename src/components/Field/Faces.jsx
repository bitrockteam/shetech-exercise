import React from "react";
import "./index.css";

const Faces = (props) => (
	<div className="faces">
		<Face id="3" {...props}>&#128578;</Face>
		<Face id="2" {...props}>&#128528;</Face>
		<Face id="1" {...props}>&#128577;</Face>
	</div>
);

const Face = ({ name, value, onChange, id, children }) => (
	<div className={`face ${value === id && "selected"}`} onClick={() => onChange(name, id)}>
		{children}
	</div>
);

export default Faces;

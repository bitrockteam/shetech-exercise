import React from "react";
import "./index.css";

const Summary = (	{ feedbackList }) => {

	const getFaces = (id) => {
		switch (id) {
		case "3":
			return <div className="result">&#128578;</div>;
		case "2":
			return <div className="result">&#128528;</div>;
		case "1":
		default:
			return <div className="result">&#128577;</div>;
		}
	};

	return (
		<div className="summary">
			<div className="row title">
				<div>NAME</div>
				<div>RESULT</div>
			</div>
			{feedbackList.map((feedback, i) =>
				<div className="row" key={i}>
					<div>{feedback.name}</div>
					{getFaces(feedback.result)}
				</div>
			)}
		</div>
	);};

export default Summary;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Questo è l'entry point della nostra applicazione,
// qui React va a prendere l'elemento "root" definito nell'html
// e lo popola con il nostro primo componente App

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

import React, {useState} from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Feedback from "./components/Feedback";
import Summary from "./components/Summary";
import "./App.css";


function App() {
	const [tab, setTab] = useState("FEEDBACK");
	const [feedbackList, setFeedbackList] = useState([]);

	const renderTab = (t) => {
		switch (t) {
		case "SUMMARY":
			return <Summary feedbackList={feedbackList} />;
		case "FEEDBACK":
		default:
			return <Feedback setFeedbackList={setFeedbackList} />;
		}
	};

	return (
		<div className="app">
			<Header />
			<div className="shade-bg">
				<Tabs setTab={setTab} current={tab} />
				{renderTab(tab)}
			</div>
		</div>
	);
}

export default App;

import React from "react";
import "./index.css";

const Tabs = ({ current, setTab }) => (
	<div className="tabs">
		<Tab setTab={setTab} current={current} tabId="FEEDBACK">
			FEEDBACK
		</Tab>
		<Tab setTab={setTab} current={current} tabId="SUMMARY">
			SUMMARY
		</Tab>

	</div>
);

const Tab = ({ setTab, tabId, current, children }) => (
	<div className={`tab ${tabId === current && "active"}`}  onClick={() => setTab(tabId)}>
		{children}
	</div>
);

export default Tabs;

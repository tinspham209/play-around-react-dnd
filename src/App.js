import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./components";
import "beautiful-react-diagrams/styles.css";

function App() {
	return (
		<div className="app">
			<DndProvider backend={HTML5Backend}>
				<Container />
			</DndProvider>
		</div>
	);
}

export default App;

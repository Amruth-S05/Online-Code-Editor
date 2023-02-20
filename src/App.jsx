import { useState } from "react";
import Navbar from "./components/Navbar";
import EditorBox from "./components/EditorBox";
import CompileBox from "./components/CompileBox";
import "./styles/App.css";

function App() {
	const [lang, setLang] = useState("javascript");
	const [theme, setTheme] = useState("vs-dark");
	const [fontSize, setFontSize] = useState(15);

	return (
		<div className="App">
			<Navbar
				className="navbar"
				lang={lang}
				setLang={setLang}
				theme={theme}
				setTheme={setTheme}
				fontSize={fontSize}
				setFontSize={setFontSize}
			/>

			<EditorBox theme={theme} fontSize={fontSize} lang={lang} />

			<CompileBox />
		</div>
	);
}

export default App;

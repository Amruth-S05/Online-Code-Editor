import './App.css';
import Navbar from "../Components/Navbar";
import {useState} from "react";
import EditorBox from "../EditorBox";
import CompileBox from "../CompileBox";

function App() {
    const [lang, setLang] = useState("javascript");
    const [theme, setTheme] = useState("vs-dark");
    const [fontSize, setFontSize] = useState(15);

    return (
    <div className="App">

        <Navbar
            className="navbar"
            lang={lang} setLang={setLang}
            theme={theme} setTheme={setTheme}
            fontSize={fontSize} setFontSize={setFontSize}
        />

        <EditorBox
            theme={theme}
            fontSize={fontSize}
            lang={lang}
        />

        <CompileBox />
    </div>
    );
}

export default App;

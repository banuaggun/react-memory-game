import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MainArea from "./components/MainArea";
import Navbar from "./components/Navbar";

const App = () => {
    const [theme, setTheme] = useState("light");

    if (theme === "light") {
        document.body.style.backgroundColor = "#fff";
    } 
    else {
        document.body.style.backgroundColor = "#292b2f";
    }

    const handleThemeChange = () => {
        if (theme === "light") {
            setTheme("dark");
            document.body.style.backgroundColor = "#292b2f";
        } else {
            setTheme("light");
            document.body.style.backgroundColor = "#fff";
        }
    };
    return (
        <BrowserRouter>
            <Navbar theme={theme} switchTheme={handleThemeChange} />
            <Routes>
                <Route path="/" element={<Home theme={theme} />} />
                <Route
                    path="/play/easy"
                    element={<MainArea key="4" difficulty="4" theme={theme} />}
                />
                <Route
                    path="/play/medium"
                    element={<MainArea key="5" difficulty="5" theme={theme} />}
                />
                <Route
                    path="/play/hard"
                    element={<MainArea key="6" difficulty="6" theme={theme} />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

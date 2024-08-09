import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./styles.css"

function ChangeTheme() {
    const [theme,setTheme] = useLocalStorage("theme","dark")

    const toggleTheme = () => 
    {
        setTheme(theme === "dark" ? "light" : "dark")
        document.getElementById('ch').className = `btn-${theme}`
    }

    return <div id="ch" className="change-theme">
        <div className="container">
            <p>Hello World!</p>
            <button name="btn" onClick={toggleTheme}>Change Theme</button>
        </div>
    </div>;
}

export default ChangeTheme;

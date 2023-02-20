import React from 'react';
import Select from "react-select";

const ThemeDropdown = ({theme, setTheme}) => {
    const themes = [
        {value: "vs", label: "Light"},
        {value: "vs-dark", label: "Dark"},
    ]

    return (
        <div>
            <Select
                options={themes}
                value={theme}
                onChange={(e) => setTheme(e.value)}
                placeholder={theme} />
        </div>
    );
};

export default ThemeDropdown;

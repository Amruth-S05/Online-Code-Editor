import React from 'react';

const FontSizeControl = ({fontSize, setFontSize}) => {

    return (
        <div>
            <input
                type="number" value={fontSize}
                min="12" max="24"
                onChange={(e) => setFontSize(e.target.value)}
                />
        </div>
    );
};

export default FontSizeControl;

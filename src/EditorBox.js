import React from 'react';
import Editor from "@monaco-editor/react";

const EditorBox = ({theme, fontSize, lang}) => {

    return (
        <div>
            <Editor
                className="editor"
                height="80vh" width="100%"
                theme={theme}
                options={{fontSize: fontSize}}
                language={lang}
                //defaultLanguage="javascript"
            />
            <button className='run-btn'>Run</button>
        </div>
    );
};

export default EditorBox;


import React from 'react';
import Editor from "@monaco-editor/react";

const EditorBox = ({theme, fontSize, lang}) => {

    return (
        <div>
            <Editor
                className="editor"
                height="80vh" width="70%"
                theme={theme}
                options={{fontSize: fontSize}}
                language={lang}
                //defaultLanguage="javascript"
            />
            <button>Run</button>
        </div>
    );
};

export default EditorBox;

import React from 'react';
import Editor from "@monaco-editor/react";

const EditorBox = ({theme, fontSize, lang}) => {

    return (
        <div className="editor">
            <Editor              
                theme={theme}
                options={{fontSize: fontSize}}
                language={lang}
                defaultValue="// Enter your code here"
                //defaultLanguage="javascript"
            />
            
            
        </div>
    );
};

export default EditorBox;




import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({onChange, code}) => {
    // init code state (code user types in Editor)
    const [value, setValue] = useState(code || "");

    // update code when user types in editor
    const handleEditorChange = (value) => {
        setValue(value);
        onChange("code", value);
    };

    return(
        <div>
            <Editor
                height="300px"
                width={`80%`}
                language={"javascript"}
                value={value}
                defaultValue="// Enter Your Code Here"
                onChnage={handleEditorChange}
            />
        </div>
    );
};

export default CodeEditor;
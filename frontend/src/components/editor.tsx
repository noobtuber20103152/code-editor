import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import useEditor from "../store/store";
function Editor() {
  const { codeInput, onChageCodeInput } = useEditor();
  return (
    <>
      <CodeEditor
        value={codeInput}
        placeholder="Enter your code."
        onChange={(e) => onChageCodeInput(e.target.value)}
        padding={15}
        language="python"
        className="w-full  min-h-[60vh] rounded-lg"
        style={{
          backgroundColor: "",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </>
  );
}

export default Editor;

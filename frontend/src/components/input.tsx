import React from "react";
import useEditor from "../store/store";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Input() {
  const { testCaseInput, onChangeTestCaseInput, codeOutput, error } = useEditor();
//   const str = "1\n2\n3\n"
  return (
    <div className="my-4 grid md:grid-cols-2 grid-cols-1 gap-2">
      <textarea
        value={testCaseInput}
        onChange={(e) => {
          onChangeTestCaseInput(e.target.value);
        }}
        rows={6}
        className="w-full text-white px-3 py-2 rounded-lg bg-zinc-900"
      />
      <Markdown className="bg-zinc-900 text-white px-2 py-2" rehypePlugins={[remarkGfm]}>
         {error?error:codeOutput}
      </Markdown>
    </div>
  );
}

export default Input;

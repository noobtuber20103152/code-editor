import React from "react";
import useEditor from "../store/store";
import axios from "axios";

function Submit() {
  const {
    testCaseInput,
    codeInput,
    onChangeOutputMessage,
    onChageErrorMessage,
    isLoading,
    onChangeLoading,
  } = useEditor();

  const submit = async () => {
    try {
      onChangeLoading(true);
      onChageErrorMessage(undefined)
      let { data } = await axios.post("http://localhost:8000/execute", {
        code: codeInput,
        input: testCaseInput,
      });
      if (data.error) {
        onChageErrorMessage(data.error);
      } else {
        onChangeOutputMessage(data.result);
      }
    } catch (error) {
    } finally {
      onChangeLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-end items-end mb-4">
        <button
          disabled={isLoading}
          onClick={submit}
          className="px-3 py-1 rounded-lg bg-blue-700 text-white"
        >
          {!isLoading ? "Run" : "Running..."}
        </button>
      </div>
    </>
  );
}

export default Submit;

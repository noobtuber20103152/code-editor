import { create } from "zustand";

type State = {
  testCaseInput: string;
  codeInput: string;
  error: string | undefined;
  codeOutput: string | undefined;
  isLoading: boolean;
};

type Action = {
  onChangeTestCaseInput: (testCase: string) => void;
  onChageCodeInput: (code: string) => void;
  onChageErrorMessage: (error: string |undefined) => void;
  onChangeOutputMessage: (output: string) => void;
  onChangeLoading: (flag: boolean) => void;
};

const useEditor = create<State & Action>((set) => ({
  testCaseInput: "",
  codeInput: "",
  error: undefined,
  codeOutput: undefined,
  isLoading: false,
  onChangeLoading: (flag: boolean) => set(() => ({ isLoading: flag })),
  onChageCodeInput: (code) => set(() => ({ codeInput: code })),
  onChangeTestCaseInput: (testCase) => set(() => ({ testCaseInput: testCase })),
  onChageErrorMessage: (error) => set(() => ({ error: error })),
  onChangeOutputMessage: (output) => set(() => ({ codeOutput: output })),
}));

export default useEditor;

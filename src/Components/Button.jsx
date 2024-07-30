import { ACTIONS } from "../App";
export default function Button({ operation, label, dispatch }) {
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const operations = ["+", "-", "×", "÷"];
  function handleClick() {
    if (digits.includes(label)) {
      dispatch({ type: ACTIONS.ENTER_DIGIT, payload: { digit: label } });
    } else if (operations.includes(label)) {
      dispatch({
        type: ACTIONS.ENTER_OPERATION,
        payload: { operation: label },
      });
    } else if (label === "=") {
      dispatch({ type: ACTIONS.ENTER, payload: { operation: operation } });
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`${label === "0" && "col-span-2 w-[200px]"} ${["+", "×", "=", "-", "÷"].includes(label) ? "bg-[#f38636] text-white" : "bg-[#dbdbdb]"} flex size-[100px] border-collapse items-center justify-center border-b border-l border-gray-400 text-3xl`}
    >
      {label}
    </button>
  );
}

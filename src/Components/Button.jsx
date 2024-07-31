import { ACTIONS } from "../App";
export default function Button({ state, operation, label, dispatch }) {
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const operations = ["+", "-", "×", "÷"];
  function handleClick() {
    if (digits.includes(label)) {
      if (label !== ".") {
        // if (label === "0" && state.current === "0") {
        //   return;
        // }
        dispatch({ type: ACTIONS.DIGIT, payload: { digit: label } });
      } else {
        if (!state.current.includes(".")) {
          dispatch({ type: ACTIONS.DIGIT, payload: { digit: label } });
        }
      }
    } else if (operations.includes(label)) {
      if (state.display !== "") {
        if (["+", "-"].includes(label)) {
          dispatch({
            type: ACTIONS.OPERATION,
            payload: { operation: label },
          });
        } else if (label === "×") {
          dispatch({
            type: ACTIONS.OPERATION,
            payload: { operation: "*" },
          });
        } else if (label === "÷") {
          dispatch({
            type: ACTIONS.OPERATION,
            payload: { operation: "/" },
          });
        }
      }
    } else if (label === "=") {
      if (state.display !== "") {
        dispatch({ type: ACTIONS.ENTER, payload: { operation: operation } });
      }
    } else if (label === "AC") {
      dispatch({ type: ACTIONS.CLEAR });
    } else if (label === "+/-") {
      if (state.current !== "") {
        dispatch({ type: ACTIONS.NEGATE });
      }
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

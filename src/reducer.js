import { ACTIONS } from "./App";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ENTER_DIGIT:
      return {
        ...state,
        current: state.current + action.payload.digit,
        display: state.current + action.payload.digit,
      };
    case ACTIONS.ENTER_OPERATION:
      switch (action.payload.operation) {
        case "÷":
          return { previous: state.current, current: "", operation: "/" };
        case "×":
          return { previous: state.current, current: "", operation: "*" };
        default:
          return {
            ...state,
            previous: state.current,
            current: "",
            operation: action.payload.operation,
          };
      }
    case ACTIONS.ENTER:
      switch (state.operation) {
        case "+":
          return {
            previous: (
              parseFloat(state.previous) + parseFloat(state.current)
            ).toString(),
            display: (
              parseFloat(state.previous) + parseFloat(state.current)
            ).toString(),
            current: "",
            operation: "",
          };
        case "-":
          return {
            previous: (
              parseFloat(state.previous) - parseFloat(state.current)
            ).toString(),
            display: (
              parseFloat(state.previous) - parseFloat(state.current)
            ).toString(),
            current: "",
            operation: "",
          };
        case "/":
          return {
            previous: (
              parseFloat(state.previous) / parseFloat(state.current)
            ).toString(),
            display: (
              parseFloat(state.previous) / parseFloat(state.current)
            ).toString(),
            current: "",
            operation: "",
          };
        case "*":
          return {
            previous: (
              parseFloat(state.previous) * parseFloat(state.current)
            ).toString(),
            display: (
              parseFloat(state.previous) * parseFloat(state.current)
            ).toString(),
            current: "",
            operation: "",
          };
        default:
          return { state };
      }
    case ACTIONS.CLEAR:
      return { previous: "", current: "", operation: "", display: "" };
    default:
      return { state };
  }
}

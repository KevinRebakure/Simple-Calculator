import { ACTIONS } from "./App";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.DIGIT:
      return {
        ...state,
        current: state.current + action.payload.digit,
        display: state.current + action.payload.digit,
      };
    case ACTIONS.OPERATION:
      switch (action.payload.operation) {
        case "÷":
          return {
            ...state,
            previous: state.previous || state.current,
            operation: "/",
            current: "",
          };
        case "×":
          return {
            ...state,
            previous: state.previous || state.current,
            operation: "*",
            current: "",
          };
        default:
          return {
            ...state,
            previous: state.previous || state.current,
            operation: action.payload.operation,
            current: "",
          };
      }
    case ACTIONS.ENTER:
      switch (state.operation) {
        case "+":
          return {
            previous: (
              parseFloat(state.previous) + parseFloat(state.current)
            ).toString(),
            operation: "",
            current: "",
            display: (
              parseFloat(state.previous) + parseFloat(state.current)
            ).toString(),
          };
        case "-":
          return {
            previous: (
              parseFloat(state.previous) - parseFloat(state.current)
            ).toString(),
            operation: "",
            current: "",
            display: (
              parseFloat(state.previous) - parseFloat(state.current)
            ).toString(),
          };
        case "/":
          return {
            previous: (
              parseFloat(state.previous) / parseFloat(state.current)
            ).toString(),
            operation: "",
            current: "",
            display: (
              parseFloat(state.previous) / parseFloat(state.current)
            ).toString(),
          };
        case "*":
          return {
            previous: (
              parseFloat(state.previous) * parseFloat(state.current)
            ).toString(),
            operation: "",
            current: "",
            display: (
              parseFloat(state.previous) * parseFloat(state.current)
            ).toString(),
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

import { ACTIONS } from "./App";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.DIGIT:
      return {
        ...state,
        current: state.current + action.payload.digit,
        display: state.current + action.payload.digit,
      };
    case ACTIONS.NEGATE:
      return {
        ...state,
        current: (parseInt(state.current) * -1).toString(),
        display: (parseInt(state.current) * -1).toString(),
      };
    case ACTIONS.OPERATION:
      if (state.operation) {
        switch (state.operation) {
          case "+":
            return {
              previous: (
                parseFloat(state.previous) + parseFloat(state.current)
              ).toString(),
              operation: action.payload.operation,
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
              operation: action.payload.operation,
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
              operation: action.payload.operation,
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
              operation: action.payload.operation,
              current: "",
              display: (
                parseFloat(state.previous) * parseFloat(state.current)
              ).toString(),
            };
          default:
            return { state };
        }
      }
      return {
        ...state,
        previous: state.previous || state.current,
        operation: action.payload.operation,
        current: "",
      };
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
          return { ...state };
      }
    case ACTIONS.CLEAR:
      return { previous: "", current: "", operation: "", display: "" };
    default:
      return { state };
  }
}

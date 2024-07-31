import { v4 as uuidv4 } from "uuid";
import Display from "./Components/Display";
import labels from "./labels";
import Button from "./Components/Button";
import { useEffect, useReducer } from "react";
import reducer from "./reducer";

export const ACTIONS = {
  DIGIT: "ENTER_DIGIT",
  OPERATION: "OPERATION",
  ENTER: "ENTER",
  CLEAR: "CLEAR",
  NEGATE: "NEGATE",
};

export default function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("calculator")) || {
      previous: "",
      operation: "",
      current: "",
      display: "",
    },
  );

  useEffect(() => {
    localStorage.setItem("calculator", JSON.stringify(state));
  }, [state]);

  console.log(state);

  return (
    <div className="mx-auto w-[400px]">
      <Display display={state.display} />
      <div className="grid grid-cols-4 border-r border-t border-gray-400">
        {labels.map((label) => (
          <Button
            key={uuidv4()}
            state={state}
            operation={state.operation}
            label={label}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}

import { v4 as uuidv4 } from "uuid";
import Display from "./Components/Display";
import labels from "./labels";
import Button from "./Components/Button";
import { useReducer } from "react";
import reducer from "./reducer";

export const ACTIONS = {
  ENTER_DIGIT: "ENTER_DIGIT",
  ENTER_OPERATION: "OPERATION",
  ENTER: "ENTER",
  CLEAR: "CLEAR",
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    previous: '',
    current: '',
    operation: ''
  });

  console.log(state)

  return (
    <div className="mx-auto w-max">
      <Display />
      <div className="grid grid-cols-4 border-r border-t border-gray-400">
        {labels.map((label) => (
          <Button key={uuidv4()} operation={state.operation} label={label} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

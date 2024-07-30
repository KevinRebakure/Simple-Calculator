import { v4 as uuidv4 } from "uuid";
import Display from "./Components/Display";
import labels from "./labels";
import Button from "./Components/Button";

function App() {
  return (
    <div className="mx-auto w-max">
      <Display />
      <div className="grid grid-cols-4 border-r border-t border-gray-400">
        {labels.map((label) => (
          <Button key={uuidv4()} label={label} />
        ))}
      </div>
    </div>
  );
}

export default App;

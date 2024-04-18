import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex items-center">
      <div className="flex flex-col w-screen items-center">
        <div>Count: {count}</div>
        <Button onClick={() => setCount(count + 1)}>Increment!</Button>
      </div>
    </div>
  );
}

export default App;

import { memo } from "react";
import "./App.css";
// import ComponentName from "./components/ComponentName";
import CounterNumber from "./components/CounterNumbers";

function App() {
  return (
    <div className="App">
      {/* <ComponentName /> */}
      <CounterNumber />
    </div>
  );
}

export default memo(App);

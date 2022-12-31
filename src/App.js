import "./App.css";
import Cards from "./components/Cards";
import data from "./mock/api.json";

function App() {
  return <div className="App">{<Cards items={data.data} />}</div>;
}

export default App;

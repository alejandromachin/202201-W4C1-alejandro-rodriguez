import "./App.css";
import Gentelmen from "./Gentelmen/Gentelmen";
import Info from "./Info/Info";
import gentelmen from "../gentelmanInfo";

function App() {
  return (
    <div className="App">
      <Info />
      <Gentelmen gentelman={gentelmen[0]} />
    </div>
  );
}

export default App;

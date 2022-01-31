import "./App.css";
import Gentelmen from "./Gentelmen/Gentelmen";
import Info from "./Info/Info";
import gentelmen from "../gentelmanInfo";

function App() {
  const gentelmenArray = gentelmen;

  const listOfArrays = gentelmenArray.map((gentelman) => {
    return <Gentelmen gentelman={gentelman} key={gentelman.id} />;
  });

  return (
    <div className="App">
      <Info />
      <ul>{listOfArrays}</ul>
    </div>
  );
}

export default App;

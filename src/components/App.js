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
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <Info />
        <main className="main">
          <ul className="gentlemen">{listOfArrays}</ul>
        </main>
      </div>
    </div>
  );
}

export default App;

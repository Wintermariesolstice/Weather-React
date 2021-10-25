import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <a
            href="https://github.com/Wintermariesolstice/Weather-React"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>
          by Nora Yusop
        </footer>
      </div>
    </div>
  );
}

export default App;

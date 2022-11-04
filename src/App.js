import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/ClockClassComponent";
import ClockFunctionComponent from "./components/ClockFunctionComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockFunctionComponent />
      </header>
    </div>
  );
}

export default App;

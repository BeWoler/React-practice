import "./App.css";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div className="component__box">
        <h2>Functional component</h2>
        <Counter />
      </div>
      <div className="component__box">
        <h2>Class component</h2>
        <ClassCounter />
      </div>
    </div>
  );
}

export default App;

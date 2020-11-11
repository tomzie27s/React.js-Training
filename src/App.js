import Variables from "./components/Variables.jsx";
import TestMenu from "./components/TestMenu.jsx";
import ShowDateNow from "./components/ShowDateNow.jsx"
import Greeting from "./Greetings.js";

function App() {
  return (
    <div className="App">
      <Greeting/>
      <Variables/>
      <TestMenu/>
      <ShowDateNow/>
    </div>
  );
}

export default App;

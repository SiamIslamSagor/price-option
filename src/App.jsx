import "./App.css";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
// import PriceOption from "./components/PriceOption/PriceOption";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className="text-7xl bg-rose-300">Vite + React</h1> */}
      {/* <PriceOption></PriceOption> */}
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;

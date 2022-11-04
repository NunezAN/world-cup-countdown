import "./App.css";
import Timer from "./component/Timer";

function App() {
  return (
    <div className="App bg-[#7F1431] text-white w-full min-h-screen flex">
      <div className="max-w-7xl m-auto text-center space-y-10 md:space-y-32">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Countdown To The World Cup! </h1>
        <Timer />
        <h3 className="text-black font-bold text-xl md:text-3xl tracking-wide">Created By: Alex Nunez</h3>
      </div>
    </div>
  );
}

export default App;

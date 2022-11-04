import "./App.css";
import Timer from "./component/Timer";

function App() {
  return (
    <div className="App bg-[#7F1431] text-white h-screen flex">
      <body className="max-w-7xl m-auto text-center space-y-8">
        <h1 className="text-6xl font-bold tracking-wide">Countdown To The World Cup! </h1>
        <Timer />
        <h3 className="text-black font-bold text-4xl tracking-wide">Created By: Alex Nunez</h3>
      </body>
    </div>
  );
}

export default App;

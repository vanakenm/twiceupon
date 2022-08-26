import logo from './logo.svg';
import './App.css';

function App() {
  let regionName = "Agincourt";
  let regionKind = "kingdom"
  return (
    <div className="flex justify-center justify-items-center h-screen bg-blue-100">
      <h1 className="text-6xl font-bold text-center  text-gray-800 m-auto">
        Our story begins in the <span className="text-cyan-400">{regionKind}</span> of <span className="text-purple-400">{regionName}</span>
      </h1>
    </div>
  );
}

export default App;

import types from './data/types.json'
import StartEpisode from './episodes/StartEpisode';
import RulerEpisode from './episodes/RulerEpisode';
import { useState } from 'react';

function random(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function App() {
  const [currentEpisode, setCurrentEpisode] = useState(0);

  function hasNextEpisode() {
    //return currentEpisode < types.length - 1;
  }
  function hasPreviousEpisode() {
    //return currentEpisode > 0;
  }
  function nextEpisode() {
    //navigate or create
    setCurrentEpisode(currentEpisode + 1);
  }

  let regionName = "Agincourt";
  let regionKind = random(types).value;
  return (
    <>
    <StartEpisode regionKind={regionKind} regionName={regionName} />
    <RulerEpisode regionKind={regionKind} regionName={regionName} />
    
    <span className="bg-purple-100 bg-purple-200 bg-geen-100 bg-green-200 bg-blue-100 bg-blue-200 bg-red-100 bg-red-200"></span>
    </>
  );
}

export default App;

import types from './data/types.json';
import names from './data/names.json';
import firstNames from './data/firstNames.json';
import surnames from './data/surnames.json';
import epochs from './data/epochs.json';
import episodes from './episodes/episodes.json';
import Episode from './components/Episode';
import { random } from './utils/utils';
import { useState } from 'react';

function createContext() {
  let regionName = random(names);
  let regionType = random(types);
  let rulerFirstName = random(firstNames);
  let rulerSurname = random(surnames);
  let epoch = random(epochs);
  let year = (Math.random() * 1000).toFixed(0);

  return {
    regionName: { data: regionName, topic: "region" },
    regionType: { data: {...regionType, rulerName: regionType.ruler[rulerFirstName.gender], topic: "region"}}, 
    rulerFirstName: { data: rulerFirstName, topic: "ruler" },
    rulerSurname: { data: rulerSurname, topic: "ruler" },
    epoch: { data: epoch, topic: "epoch" },
    year: { data: year, topic: "year" },
  };
}
function App() {
  const [context, setContext] = useState(createContext());

  function reroll(name) {
    let topic = context[name.trim()].topic;

    let newContext = {...context};
    if(topic === "region") {
      newContext.regionName.data = random(names);
      newContext.regionType.data = random(types);
    } else if(topic === "ruler") {
      newContext.rulerFirstName.data = random(firstNames);
      newContext.rulerSurname.data = random(surnames);
    } else if(topic === "epoch") {
      newContext.epoch.data = random(epochs);
    } else if(topic === "year") {
      newContext.year.data = (Math.random() * 1000).toFixed(0);
    }
    setContext(newContext);
  }

  function renderEpisodes(episodes, context) {
    return (
      episodes.map((ep, index) => <Episode reroll={reroll} key={ep.id} context={context} episode={ep} previous={ episodes[index - 1]?.id } next={ episodes[index + 1]?.id } />)
    );
  }

  return (
    <>
    { renderEpisodes(episodes, context) }
    <span className="
      bg-red-100 bg-red-200 text-red-400 hover:bg-red-200 hover:bg-red-300
      bg-green-100 bg-green-200 text-green-400 hover:bg-green-200 hover:bg-green-300
      bg-teal-100 bg-teal-200 text-teal-400 hover:bg-teal-200 hover:bg-teal-300
      bg-purple-100 bg-purple-200 text-purple-400 hover:bg-purple-200 hover:bg-purple-300
      bg-blue-100 bg-blue-200 text-blue-400 hover:bg-blue-200 hover:bg-blue-300
      rounded-lg" /> 
    </>
  );
}

export default App;

import types from './data/types.json';
import names from './data/names.json';
import firstNames from './data/firstNames.json';
import surnames from './data/surnames.json';
import epochs from './data/epochs.json';
import Episode from './episodes/Episode';
import { random } from './utils/utils';

function createContext() {
  let regionName = random(names);
  let regionType = random(types)
  let rulerFirstName = random(firstNames);
  let rulerSurname = random(surnames);
  let epoch = random(epochs);
  let year = (Math.random() * 1000).toFixed(0);

  return {
    regionName: regionName,
    regionType: regionType,
    ruler: { name: rulerFirstName.name, gender: rulerFirstName.gender, title: regionType.ruler[rulerFirstName.gender], surname: rulerSurname },
    epoch: epoch,
    year: year
  };
}
function App() {


  let context = createContext();

  let episodes = [
    {
      id: "epoch",
      name: "Epoch",
      template: "In {{ year }} after {{ epoch.value }}",
    },
    {
      id: "start",
      name: "Start",
      template: "Our story begins in the {{ regionType.value }} of {{ regionName }}",
    },
    {
      id: "ruler",
      name: "Ruler",
      template: "In {{ year }} {{ epoch.code }}, {{ ruler.name }} {{ ruler.surname }} was {{ ruler.title }} of {{ regionName }}",
    }
  ];

  function renderEpisodes(episodes, context) {
    return (
      episodes.map((ep, index) => <Episode context={context} episode={ep} previous={ episodes[index - 1]?.id } next={ episodes[index + 1]?.id } />)
    );
  }

  return (
    <>
    { renderEpisodes(episodes, context) }
    <span className="bg-red-100 bg-red-200 bg-green-100 bg-green-200 bg-teal-100 bg-teal-200 bg-purple-100 bg-purple-200 bg-green-100 bg-green-200 bg-blue-100 bg-blue-200 bg-red-100 bg-red-200"></span>
    </>
  );
}

export default App;

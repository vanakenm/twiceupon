import Screen from '../components/Screen';
import { random } from '../utils/utils';
import Mustache from 'mustache';

const COLORS = [
    "red",
    "teal",
    "purple",
    "green",
    "blue"
]

export default function Episode(props) {
    function split(template) {
        let parts = template.split(" ");
        let currentPart = ""
        let results = []
        for(let part of parts) {
            if(part.includes("{{")) {
                results.push(currentPart)
                currentPart = part
            } else if(part.includes("}}")) {
                currentPart = currentPart + part
                results.push(currentPart)
                currentPart = ""
            } else {
                currentPart = currentPart + " " + part;
            }
            
        }
        if(results[results.length] !== currentPart) {
            results.push(currentPart)
        }
        return results;
    }

    function renderChunks(chunks, context, screenColor) {
        let colorArray = COLORS.filter(function(item) {
            return item !== screenColor
        })
        return chunks.map((chunk, index) => {
            if(chunk.includes("{{")) {
                let color = random(colorArray);
                return <span key={index} className={`my-10 px-4 ml-4 rounded-lg text-${color}-400 bg-${color}-100`}>{Mustache.render(chunk, context)}</span>
            } else {
                return <span key={index}>{chunk}</span>;
            }
        });
    }

    let context = props.context;
    let episode = props.episode;
    let id = episode.id;
    let next = props.next;
    let previous = props.previous;
    let screenColor = random(COLORS);    
    return (
        <Screen color={ screenColor } id={id} next={next} previous={previous}>
            <h1 className="text-6xl font-bold text-center leading-loose text-gray-800 m-auto">
                {renderChunks(split(episode.template), context, screenColor)}
            </h1>
        </Screen>
    )
}
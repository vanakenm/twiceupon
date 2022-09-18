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
    function addSpans(template) {
        return template.replace(/{{/g, `<span class="text-${random(COLORS)}-400">{{`).replace(/}}/g, '}}</span>');
    }

    let context = props.context;
    let episode = props.episode;
    let id = episode.id;
    let next = props.next;
    let previous = props.previous;
    
    let text = Mustache.render(addSpans(episode.template), context);
    return (
        <Screen color={ random(COLORS) } id={id} next={next} previous={previous}>
            <h1 className="text-6xl font-bold text-center  text-gray-800 m-auto">
                <span dangerouslySetInnerHTML={{ __html: text }} />
            </h1>
        </Screen>
    )
}
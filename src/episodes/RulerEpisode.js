import Screen from '../components/Screen';

export default function RulerEpisode(props) {
    let regionName = props.regionName;
    let rulerName = props.rulerName;
    let rulerSurname = props.rulerSurname;
    let regionRulerKind = props.regionRulerKind;
    return (
        <Screen color="purple" id="ruler">
            <h1 className="text-6xl font-bold text-center  text-gray-800 m-auto">
                 In 456 AD, <span className="text-teal-400">{rulerName} {rulerSurname}</span> was <span className="text-cyan-400">{regionRulerKind}</span> of <span className="text-purple-400">{regionName}</span>
            </h1>
        </Screen>
    )
}
import Screen from '../components/Screen';

export default function RulerEpisode(props) {
    let regionName = props.regionName;
    let regionKind = props.regionKind;
    return (
        <Screen color="purple" id="ruler">
            <h1 className="text-6xl font-bold text-center  text-gray-800 m-auto">
                 Our story begins in the <span className="text-cyan-400">{regionKind}</span> of <span className="text-purple-400">{regionName}</span>
            </h1>
        </Screen>
    )
}
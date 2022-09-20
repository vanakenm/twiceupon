import Mustache from 'mustache';
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function Tag(props) {
    const [showButtons, setShowButtons] = useState(false);
    let { index, color, chunk, context, data, reroll} = props;
    return (
    <span onMouseEnter={() => setShowButtons(true)} onMouseLeave={() => setShowButtons(false)} className="relative">
        <span key={index} className={`my-10 px-4 ml-4 rounded-lg text-${color}-400 shadow hover:bg-${color}-200 bg-${color}-100`}>
            <span dangerouslySetInnerHTML={{ __html: Mustache.render(chunk, context)}} />
        </span>
        { showButtons && <span className={`cursor-pointer absolute top-0 right-0 -translate-y-1/2 translate-x-1/2`} title={data} onClick={() => reroll(data)}><ArrowPathIcon className={`rounded-full p-1 h-8 w-8 shadow bg-${color}-200 hover:bg-${color}-300`} /></span> }
    </span>)
}
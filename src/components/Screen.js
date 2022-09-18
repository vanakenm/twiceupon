import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid'

function Screen(props) {
  let bgColor = props.color
  let next = props.next
  let previous = props.previous
  let id = props.id
  return (
    <div id={id} className={`flex relative justify-center justify-items-center h-screen bg-${bgColor}-100`}>
      { previous !== undefined && <a href={`#${previous}`} className={`absolute shadow rounded-full bg-${bgColor}-200 p-1 cursor-pointer top-2 text-xl`}><ChevronDoubleUpIcon className="h-12 w-12"/></a>}
      {props.children}

      { next !== undefined && <a href={`#${next}`} className={`absolute shadow rounded-full bg-${bgColor}-200 p-1 cursor-pointer bottom-2 text-xl`}><ChevronDoubleDownIcon className="h-12 w-12"/></a>}
    </div>
  );
}

export default Screen;
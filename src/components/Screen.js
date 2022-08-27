import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'

function Screen(props) {
  let bgColor = props.color
  let id = props.id
  return (
    <div id={id} className={`flex relative justify-center justify-items-center h-screen bg-${bgColor}-100`}>
      {props.children}

      <a href="#ruler" className={`absolute shadow rounded-full bg-${bgColor}-200 p-1 cursor-pointer bottom-2 text-xl`}><ChevronDoubleDownIcon className="h-12 w-12"/></a>
    </div>
  );
}

export default Screen;
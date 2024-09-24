import { ElementData, Inspector } from '@/Inspector';
import { useRef } from 'react';

const items = Array.from(new Array(30), (_, index) => `Item-${index}`);

const getId = (id: number | null, extra: string) => {
  if (id) {
    return { id: `${extra}-${id}` };
  }
  return {};
};

function App() {
  const handleMouseClick = (e: MouseEvent, data: ElementData) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(data);
  };
  const inspector = useRef(new Inspector({ onElementClick: handleMouseClick })).current;

  return (
    <div className="rounded">
      <button
        className="btn"
        onClick={() => {
          inspector.startCapturing();
        }}
      >
        Start
      </button>
      <button
        className="btn"
        onClick={() => {
          inspector.stopCapturing();
        }}
      >
        Stop
      </button>
      <div className="grid w-[100%] grid-cols-[1fr] gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {items.map((item, index) => {
          const id = index % 2 === 0 ? index : null;

          return (
            <div key={index} {...getId(id, 'card')} className="card bg-base-300 shadow-xl">
              <div {...getId(id, 'card-body')} className="card-body">
                <h2 {...getId(id, 'card-title')} className="card-title">
                  {item}
                </h2>
                <p {...getId(id, 'card-p')}>If a dog chews shoes whose shoes does he choose?</p>
                <div {...getId(id, 'card-actions')} className="card-actions justify-end">
                  <button id={item} className="btn btn-sm btn-primary">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

import { h } from 'hyperapp';

const decrement = (state: number) => state - 1;
const increment = (state: number) => state + 1;

const App = ({ state }: { state: number }) => (
  <main>
    <h1>{state}</h1>
    <button type="button" onClick={decrement}>
      -
    </button>
    <button type="button" onClick={increment}>
      +
    </button>
  </main>
);

export default App;

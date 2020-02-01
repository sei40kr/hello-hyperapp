import { h, app } from 'hyperapp';
import App from './components/App';

app({
  init: 0,
  view: (state: number) => <App state={state} />,
  node: document.getElementById('app'),
});

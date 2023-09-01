import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TodoStore from './stores/TodoStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(( 
  <Provider TodoStore={TodoStore}>
    <App />
  </Provider>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});

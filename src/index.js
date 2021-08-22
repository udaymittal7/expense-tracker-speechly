import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId='b9a8c246-020b-4dc5-8159-9c376c4c8a6f' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

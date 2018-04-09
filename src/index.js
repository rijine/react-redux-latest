import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import './styles/styles.scss';
import OptionsApp from './OptionsApp';
import ExpenseApp from './ExpenseApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ExpenseApp />, document.getElementById('root'));
registerServiceWorker();

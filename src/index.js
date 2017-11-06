import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import cutomTheme from './styles/materialTheme';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import Root from './pages/root/Root';
import reducer from './redux/index';

const history = createHistory();

const middleware = applyMiddleware(thunk, routerMiddleware(history), createLogger());
export const store = createStore(reducer, middleware);

ReactDOM.render(
	<Provider store={store}>
	<div>
		<ReduxToastr position="top-center" timeOut={5000} transitionIn="fadeIn" transitionOut="fadeOut" progressBar />
		<MuiThemeProvider muiTheme={cutomTheme}>
			<Root history={history}/>
		</MuiThemeProvider>
	</div>
</Provider>
, document.getElementById('root'));
registerServiceWorker();

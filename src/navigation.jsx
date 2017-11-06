import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from './index';
//Function
import { trans, isInRole } from './global';
import { toastr } from 'react-redux-toastr';
//Actions
import { push } from 'react-router-redux';
import { load, loadDone } from './redux/actions/app';
//Icons
import Code from 'material-ui/svg-icons/action/code';
import Menu from 'material-ui/svg-icons/navigation/menu';

//Pages
import Index from './pages/index/Index';

export const drawer_width = 400;

export const drawer_nav = [
	{
		label: trans('Home'),
		path: '/',
		role: 'user',
		leftIcon: <Menu />
	},
	{
		label: trans('About'),
		role: 'user',
		leftIcon: <div />,
		subItems: [
			{
				label: trans('About'),
				path: '/about',
				leftIcon: <div />
			}
		]
	}
]

export const menu_nav = [
	{
		label: trans('Debug'),
		rightIcon: <Code />,
		role: 'debug',
		subItems: [
			{
				label: 'Message',
				rightIcon: <Code />,
				action: () => {
					toastr.message('Debug', 'Message');
				}
			},
			{
				label: 'Load View',
				action: () => {
					store.dispatch(load('Debug loading'))
					setTimeout(() => {
						store.dispatch(loadDone('Debug loading'))
					}, 5000);
					store.dispatch(load('Debug loading 2'))
					setTimeout(() => {
						store.dispatch(loadDone('Debug loading 2'))
					}, 3000);
				}
			}
		]
	},
	{
		label: trans('Administration'),
		action: () => {
			store.dispatch(push('/administration'));
		}
	}
]

export class Routes extends React.Component {
	render() {
		return (<div>
			<Route exact path="/" component={Index} />
			<Route exact path="/about" component={isInRole('user')? () => <div className="page"><h3>About</h3></div> : () => <Redirect to="/" />} />
		</div>)
	}
}
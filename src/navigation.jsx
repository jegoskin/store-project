import React from 'react';
import { Route } from 'react-router-dom';

//Function
import { trans } from './global';

//Icons
import Menu from 'material-ui/svg-icons/navigation/menu';
import AddIcon from 'material-ui/svg-icons/content/add';


//Pages
import Index from './pages/index/Index';
import AddProduct from './pages/product/addProduct';

export const drawer_width = 300;

export const drawer_nav = [
	{
		label: trans('Home'),
		path: '/',
		role: 'user',
		leftIcon: <Menu />
	},
	{
		label: trans('Add product'),
		path: '/add-product/',
		role: 'user',
		leftIcon: <AddIcon />
	},
]

export const menu_nav = []

export class Routes extends React.Component {
	render() {
		return (<div>
			<Route exact path="/" component={Index} />
			<Route exact path="/add-product/" component={AddProduct} />
		</div>)
	}
}
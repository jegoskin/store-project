import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../product/productList'
import { shirtList, deleteProduct } from '../../redux/actions/actionFile.js';

import { Card, CardTitle, CardText, Checkbox } from 'material-ui';
import EditIconOff from 'material-ui/svg-icons/content/remove';
import EditIconOn from 'material-ui/svg-icons/content/remove-circle';

import config from '../../lib/base/Config';

class Index extends Component {
	constructor(){
		super();
		this.state = {
			edit: false,
		}
	}

	componentDidMount() {
		this.props.shirtList();
	}

	handleCheck = (isChecked) => {
		let newState = Object.assign({}, this.state);
		newState.edit = isChecked;
		this.setState(newState);
	}

	handleDelete = (newProducts) => {
		this.props.deleteProduct(newProducts)
	}

	render() {
		return (
			<div className="page">
				<Card>
					<CardTitle title={config.data.app.header} subtitle={config.getVersion()} />
					{ <Checkbox checkedIcon={<EditIconOn />} uncheckedIcon={<EditIconOff />} checked={this.state.edit} onCheck={(e, isChecked) => this.handleCheck(isChecked)} style={{ float: 'right', marginRight: '20px', marginTop: '-60px', width: '20px', }}  />}
					
					<CardText style={{clear: 'both',}}>
						<ProductList edit={this.state.edit} products={this.props.shirts} onDelete={this.handleDelete} />
					</CardText>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	shirts: state.store.shirtList,
})

const mapDispatchToProps = {
	shirtList,
	deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
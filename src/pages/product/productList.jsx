import React, {Component} from 'react';

import { IconButton } from 'material-ui';
import ShopIcon from 'material-ui/svg-icons/action/shopping-cart';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/image/edit';

class ProductList extends Component {

	onDeleteSubmit = (item) => {
		this.props.onDelete(item);
	}

	render(){
		let productBox = this.props.products.map((item, index) => {
			return (
				<div style={{float: 'left', width: '250px', textAlign: 'center',}} key={ index }>
					<img src={ item.img } alt={ item.name } />	
					<h3>{item.name} ({item.id})</h3>
					<p>Description: {item.description}</p>
					<p>Price: {item.price} Kč</p>
					
					{ this.props.edit? <div><IconButton><DeleteIcon onClick={() => this.onDeleteSubmit(item)} /></IconButton><IconButton><EditIcon /></IconButton></div> : <IconButton><ShopIcon /></IconButton> }
				</div>
			);
		});

		return(
			<div>
				{ productBox }
				<div style={{clear: 'both',}}></div>
  		</div>
		)}
}

export default ProductList;

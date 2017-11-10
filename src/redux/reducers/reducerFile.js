const store = (state = {
	shirtList : []
}, action) => {
	let newState = Object.assign({},state);
	switch (action.type) {
		case 'SHIRTS_LIST':
			newState.shirtList = action.payload;
			break;
		case 'PRODUCT_DELETE':
			newState.shirtList = action.payload;
			break;
		default:
			break;
	}
	return newState;
}

export default store;
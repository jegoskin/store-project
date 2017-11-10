import api from '../../lib/api/Api';

const API_COLLECTION = {
	shirts: 'shirts'
}

export const shirtList = () => ((dispach) => {
	dispach({
		type: 'SHIRTS_FETCHING'
	})
	api.get(API_COLLECTION.shirts)
		.then((result) => {
			dispach({
				type: 'SHIRTS_LIST',
				payload : result.body
			})
		})
})

export const addProduct = (newProduct) => ((dispach) => {
	dispach({
		type: 'SHIRT_ADD_FETCHING',
		payload: null
	})
	api.insert(API_COLLECTION.shirts,newProduct)
		.then((result) => {
			dispach({
				type: 'SHIRT_ADD_SUCCESS',
				payload: null
			})
			dispach(shirtList());
		})
})

export const deleteProduct = (deletedProduct) => ((dispach) => {
	dispach({
		type: 'PRODUCT_DELETE_FETCHING',
		payload: null
	})
	api.delete(API_COLLECTION.shirts,deletedProduct)
		.then((result) => {
			dispach({
				type: 'PRODUCT_DELETE_SUCCESS',
				payload: null
			})
			dispach(shirtList());
		})
})
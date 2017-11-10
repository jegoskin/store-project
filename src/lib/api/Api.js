const initData = {
	shirts: [
		{ id: 1, name: "Tričko 1", price: '89', img: '../../img/triko1.jpg', longSleeve: false, description: 'Lorem ipsum donor' },
		{ id: 2, name: "Tričko 2", price: '199', img: '../../img/triko2.jpg', longSleeve: false, description: 'Lorem ipsum donor' },
		{ id: 3, name: "Tričko 3", price: '99', img: '../../img/triko3.jpg', longSleeve: false, description: 'Lorem ipsum donor' },
		{ id: 4, name: "Tričko 4", price: '59', img: '../../img/triko4.jpg', longSleeve: false, description: 'Lorem ipsum donor' },
	]
}

const responseTime = () => (100 + Math.random()*900);

class Api {
	constructor() {
		let cache = localStorage.getItem('db');
		if (cache) {
			this.data = JSON.parse(cache);
		} else {
			this.data = initData;
			this._save();
		}
	}
	_save() {
		localStorage.setItem('db', JSON.stringify(this.data))
	}
	get(collection, id = null) {
		return new Promise ((resolve, reject) => {
			setTimeout(() => {
				let data = this.data[collection];
				let response = id? data.find(item => item === id) : data;
				resolve({
					status: 'ok',
					body: response
				})
			}, responseTime());
		})
	}
	insert(collection, object) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let data = this.data[collection];
				console.log(data);
				let lastId = data.length;
				object.id = lastId + 1;
				this.data[collection].push(object);
				this._save();
				resolve({
					status: 'ok',
					body: object
				})
			}, responseTime())
		})
	}
	delete(collection, object) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let index = this.data[collection].findIndex(item => item.id === object.id);
				this.data[collection].splice(index, 1);
				this._save();
				resolve({
					status: 'ok'
				})
			}, responseTime())
		})
	}
	update(collection, object) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let index = this.data[collection].findIndex(item => item.id === object.id);
				this.data[collection][index] = object;
				this._save();
				resolve({
					status: 'ok',
					body: object
				})
			}, responseTime())
		})
	}
}
const api = new Api();
export default api;
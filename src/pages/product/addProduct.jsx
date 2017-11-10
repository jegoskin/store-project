import React, { Component } from 'react';
import {Card, CardText, CardTitle, RaisedButton, CardActions, TextField, RadioButton, RadioButtonGroup } from 'material-ui';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { addProduct } from '../../redux/actions/actionFile.js';

class AddProduct extends Component {
	constructor(){
		super();
		this.state = this.getInitState();
	}

	getInitState = () => ({
		newProduct: {
			name: '',
			price: '',
			img: '',
			longSleeve: false,
			description: '', 
		},
		file: '',
		imagePreviewUrl: ''
	})

	componentDidMount() {
		this.getInitState();
	}

	handleSubmit = () => {
		let newState = Object.assign({}, this.state);
		newState.newProduct.img = '../../img/' + this.state.img.name;
		this.props.addProduct(newState.newProduct);
		this.props.navigate('/');
	}

	handleCancle = () => {
		this.getInitState();
		this.props.navigate('/');
	}

	handleChange = (e) => {
		let value = e.currentTarget.value;
		let id = e.currentTarget.id;
		let newState = Object.assign({}, this.state);
		newState.newProduct[id] = value;
		this.setState(newState);
	}

	handleRadioChange = (e) => {
		let newState = Object.assign({}, this.state);
		newState.newProduct.longSleeve = e.currentTarget.value;
		this.setState(newState);
	}

	checkInputs = () => {
		return 	(this.state.newProduct.name &&
						this.state.newProduct.price	&&
						this.state.img ) ? false : true;
	}

	handleImageChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({ 
				img: file,
        imagePreviewUrl: reader.result,
      });
    }
		reader.readAsDataURL(file)
  }

	render(){
		let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} alt='Upload foto' />);
    } else {
      imagePreview = (<div style={{border: '1px solid gray', width: '250px', height: '300px', marginTop: '20px', marginBottom: '20px', textAlign: 'center',}}><p style={{marginTop: '100px',}}>Please select an Image for Preview</p></div>);
    }

		return(
			<div className="page">
				<Card>
				<CardTitle title="Add Product" />
				<CardText>
					<TextField 
						style={{display: 'block', marginBottom: '20px',}}
						floatingLabelText="Name" 
						value={this.state.newProduct.name}
						onChange={this.handleChange}
						id="name"
					/>
					<TextField 
						style={{display: 'block', marginBottom: '20px',}}
						floatingLabelText="Price" 
						value={this.state.newProduct.price}
						onChange={this.handleChange}
						id="price"
						type="number"
					/>
					<TextField 
						style={{display: 'block', marginBottom: '20px',}}
						floatingLabelText="Description" 
						value={this.state.newProduct.description}
						onChange={this.handleChange}
						multiLine={true}
						rows={2}
						id="description"
					/>

					<RadioButtonGroup 
						name = 'longSleeve'
						id='longSleeve'
						onChange={this.handleRadioChange}
						style = {{display: 'block', marginBottom: '20px',}}
						defaultSelected={false}
					>
						<RadioButton
							value={true}
							label="Long"
						/>
						<RadioButton
							value={false}
							label="Short"
						/>
					</RadioButtonGroup>

					<RaisedButton 
						containerElement='label'
						onChange={(e)=>this.handleImageChange(e)}
						label="Select image"
					>
						<input type="file" style={{ display: 'none' }} />
					</RaisedButton>

					<div className="imgPreview">
						{imagePreview}
					</div>
				</CardText>
				<CardActions>
					<RaisedButton 
						onClick={this.handleSubmit}
						label={'Save'}
						disabled={this.checkInputs()}
					/>
					<RaisedButton 
						onClick={() => this.handleCancle()}
						label={'Cancle'}
					/>
				</CardActions>
			</Card>
			</div>
	)}
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
	addProduct,
	navigate: (url) => push(url),
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
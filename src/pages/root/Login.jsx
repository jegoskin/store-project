import React, { Component } from 'react';
import { connect } from 'react-redux';

import Language from 'material-ui/svg-icons/action/language';

import { trans } from '../../global';
import { login, languageSet } from '../../redux/actions/app';

import { Paper, TextField, AppBar, RaisedButton, IconMenu, IconButton, MenuItem } from 'material-ui';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
	handleChange = (e, newValue) => {
		let id = e.target.id;
		this.setState(Object.assign({}, this.state, { [id]: newValue }))
	}
	handleKeyPress = (e) => {
		let id = e.target.id;
		if (e.key === 'Enter') {
			if (id === 'username')
				this.pass.focus();
			else
				this.submit();
		}
	}
	submit = () => {
		let credential = Object.assign({}, this.state);
		this.props.login(credential);
	}
	render() {
		const languageMenu = (
			<IconMenu
				iconButtonElement={<IconButton><Language /></IconButton>}
				anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
			>
				{ this.props.languages.map((lang, index) => <MenuItem key={index} primaryText={lang.toUpperCase()} onClick={() => this.props.languageSet(lang)}/>) }
			</IconMenu>
		)
		return (
			<div className="center" style={{width: '500px'}}>
				<AppBar showMenuIconButton={false} title={this.props.title} iconElementRight={languageMenu}/>
				<Paper zDepth={2} style={{padding: '32px'}}>
					<TextField
						id="username"
						hintText="Password Field"
						floatingLabelText={trans("Username")}
						fullWidth
						value={this.state.username}
						onChange={this.handleChange}
						onKeyPress={this.handleKeyPress}
					/>< br/>
					<TextField
						id="password"
						ref={i => this.pass = i}
						hintText="Password Field"
						floatingLabelText={trans("Password")}
						type="password"
						fullWidth
						value={this.state.password}
						onChange={this.handleChange}
						onKeyPress={this.handleKeyPress}
					/>
					<br />
					<RaisedButton style={{float: 'right'}} label={trans("Login")} primary={true} onClick={this.submit}/>
					<div style={{clear: 'both'}}/>
				</Paper>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	languages: state.app.languages
})

const mapDispatchToProps = {
	login,
	languageSet
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
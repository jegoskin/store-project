import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter as Router, push } from 'react-router-redux';
//Action
import { drawerToggle, languageSet, logout } from '../../redux/actions/app';
//Components
import { AppBar, Drawer, MenuItem, IconMenu, IconButton, Avatar } from 'material-ui';
import Login from './Login';
import Loader from './Loader';
//Icons
import Account from 'material-ui/svg-icons/action/account-circle';
import Language from 'material-ui/svg-icons/action/language';
import Exit from 'material-ui/svg-icons/action/exit-to-app';
import Menu from 'material-ui/svg-icons/navigation/menu';
//Functions
import { userPhoto } from '../../global';
import { trans, isInRole } from '../../global';

import config from '../../lib/base/Config';
import { drawer_nav, menu_nav, Routes, drawer_width } from '../../navigation';


class Root extends Component {
  handleNavClick = (item) => {
    if (item.path) {
      this.props.drawerToggle(false);
      this.props.navigate(item.path);
    }
  }
  handleMenuClick = (item) => {
    if (item.action) {
      item.action();
    }
  }
  render() {
    const title = (<div>{config.data.app.header}<span style={{fontSize : '9px'}}>&nbsp;&nbsp;{config.getVersion()}</span></div>);
    const avatar = (
      <IconButton tooltip={`Sign as ${this.props.username}`} tooltipPosition="bottom-left">
        {this.props.userAvatar? <Avatar className="avatar" src={userPhoto.getUserPhoto(this.props.username)} /> : <Avatar className="avatar" icon={<Account />} />}
      </IconButton>)
    const menuItems = menu_nav.filter(item => !item.role || isInRole(item.role)).map((item, index) => <MenuItem key={index} primaryText={item.label} rightIcon={item.rightIcon} onClick={() => this.handleMenuClick(item)} menuItems={item.subItems && item.subItems.filter(item => !item.role || isInRole(item.role)).map((item, index) => <MenuItem key={index} primaryText={item.label} rightIcon={item.rightIcon} onClick={() => this.handleMenuClick(item)} />)}/> );
    const rightMenu = (
      <IconMenu
        iconButtonElement={avatar}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        { menuItems }
        { this.props.app.languages.length > 0 && <MenuItem primaryText={trans("Language")} rightIcon={<Language />} menuItems={
          this.props.app.languages.map((lang, index) => <MenuItem key={index} primaryText={lang.toUpperCase()} onClick={() => this.props.languageSet(lang)}/>)
        }/>}
        <MenuItem primaryText={trans("Logout")} rightIcon={<Exit />} onClick={() => this.props.logout()}/>
      </IconMenu>
    )
    const navigs = drawer_nav.filter(item => !item.role || isInRole(item.role)).map((item, index) => <MenuItem key={index} primaryText={item.label} onClick={() => this.handleNavClick(item)} leftIcon={item.leftIcon} nestedItems={item.subItems && item.subItems.filter(item => !item.role || isInRole(item.role)).map((item, index) => <MenuItem key={index} primaryText={item.label} leftIcon={item.leftIcon} onClick={() => this.handleNavClick(item)}/>)} /> );
    const main = (
      <Router history={this.props.history}>
        <div>
          <AppBar onLeftIconButtonTouchTap={this.props.drawerToggle} onTitleTouchTap={() => this.props.navigate('/')} title={title} iconElementRight={rightMenu}/>
          <Drawer
            docked={false}
            width={drawer_width}
            open={this.props.app.drawerOpen}
            onRequestChange={this.props.drawerToggle}
            >
            <AppBar title={title} showMenuIconButton={false} iconElementRight={<IconButton onClick={this.props.drawerToggle}><Menu /></IconButton>} />
            { navigs }
          </Drawer>
          <Routes />  
        </div>
      </Router>
    );
    return (
      <div>
        <Loader loading={this.props.loading}/>
        { !config.isLogin() || this.props.app.login.data.username? main : <Login title={title}/> }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
  userAvatar: state.app.login.userAvatar,
  username: state.app.login.data.username,
  loading: state.app.loading
})

const mapDispatchToProps = {
  drawerToggle,
  languageSet,
  logout,
  navigate: (url) => push(url)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);

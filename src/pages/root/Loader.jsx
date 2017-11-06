import React, { Component } from 'react';
import { CircularProgress } from 'material-ui';

class Loader extends Component {
	render() {
		if (this.props.loading.length > 0) {
      return (
        <div className="fullscreen" style={{backgroundColor: 'rgba(50,50,50,0.5)'}}>
          <div className="center" style={{textAlign: 'center'}}>
            <CircularProgress size={160} thickness={7}/>
					{ this.props.loading.map((item, index) => <h4 key={index}>{item}...</h4>) }
          </div>
        </div>
      )
    } else return null;
	}
}

export default Loader
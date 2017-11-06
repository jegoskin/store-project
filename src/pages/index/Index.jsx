import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardTitle, CardText } from 'material-ui';

import config from '../../lib/base/Config';

class Index extends Component {
	render() {
		return (
			<div className="page">
				<Card>
					<CardTitle title={config.data.app.header} subtitle={config.getVersion()} />
					<CardText>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus ullamcorper diam at aliquet. Duis mattis ultrices rhoncus. Praesent blandit justo id justo pretium volutpat. Curabitur consequat lacinia ultricies. Morbi erat lorem, facilisis vel dui eu, blandit pulvinar velit. In risus diam, laoreet imperdiet dui vel, commodo aliquam lorem. Proin ac dolor consectetur, pellentesque urna sagittis, interdum magna.</p>
						<p>Nullam at dolor vel tellus interdum posuere. Suspendisse in dapibus risus. Suspendisse vitae facilisis libero, aliquam sodales ex. Mauris dictum, justo vel malesuada rutrum, orci sapien egestas ex, vel vehicula nunc sem at sem. In eleifend, turpis vitae maximus faucibus, urna ex sodales urna, nec blandit ex nibh a turpis. Fusce sed ipsum est. Donec convallis rutrum dapibus.</p>
						<p>Sed fringilla porta lectus, faucibus tempus nulla dignissim ut. Phasellus rutrum felis ante, id porttitor ante auctor sed. Phasellus ultrices convallis ex ut posuere. Ut pulvinar accumsan massa sit amet sagittis. Mauris ut felis turpis. Fusce ac tempus turpis, ac ullamcorper turpis. Vestibulum eleifend nulla sed risus aliquet, sit amet elementum arcu tristique. Fusce vel quam fringilla, venenatis augue semper, venenatis nisi. Nunc finibus, neque nec eleifend scelerisque, nunc lectus tristique mi, in iaculis arcu velit quis mauris. Curabitur ac sodales erat.</p>
					</CardText>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
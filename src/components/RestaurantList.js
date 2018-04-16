import React, { Component } from 'react';
import RestaurantInfo from './RestaurantInfo'

class RestaurantList extends Component {
	static defaultProps = {
		data: []
	}

	render() {
		const { data } = this.props;
		const list = data.map(
			info => (<RestaurantInfo key={info.id} info={info} />)
		);

		return (
			<div>
				{list}
			</div>
		);
	}
}

export default RestaurantList;
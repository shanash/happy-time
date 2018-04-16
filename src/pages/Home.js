import React, { Component } from 'react';
import RestaurantList from 'components/RestaurantList'

class Home extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '맥도날드',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '한식',
        phone: '010-0000-0001'
      },
      {
        id: 2,
        name: '중식',
        phone: '010-0000-0001'
      }
    ]
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  render() {
    return (
      <RestaurantList data={this.state.information} />
    );
  }

}

export default Home;
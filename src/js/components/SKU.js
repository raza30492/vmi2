import React, { Component } from "react";

import AppHeader from './AppHeader';
import Header from 'grommet/components/Header';

export default class SKU extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
		    <Header>
			    <AppHeader />
			  </Header>
			  <h1>Welcome to SKU Page!</h1>
			</div>
    );
  };
}

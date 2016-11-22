import React, { Component } from "react";

import AppHeader from './AppHeader';
import Header from 'grommet/components/Header';

export default class Fit extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
		    <Header>
			    <AppHeader />
			  </Header>
			  <h1>Welcome to Fit Page!</h1>
			</div>
    );
  };
}

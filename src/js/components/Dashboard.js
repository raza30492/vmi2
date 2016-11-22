import React, {Component} from 'react';
import { connect } from 'react-redux';

import Header from 'grommet/components/Header';
//import Title from 'grommet/components/Title';

import AppHeader from './AppHeader';

import { navActivate } from '../actions';

class Dashboard extends Component {
  constructor () {
	  super();

	  this._openNav = this._openNav.bind(this);
  }

  _openNav () {
	  this.props.dispatch(navActivate(true));
  }

  render () {

	//  let { active: navActive } = this.props.nav;
	//  let title = null;
	//   if ( !navActive ) {
  //   title =(
	// 		  <Title onClick={this._openNav}>
	// 	      Sample App
	// 	    </Title>
	//     );
  // }
    return (
		  <div>
		    <Header>
			    <AppHeader />
			  </Header>
			  <h1>Welcome to Dashboard!</h1>
			</div>
    );
  }
}

let select = (store) => {
  return { nav: store.nav};
};

export default connect(select)(Dashboard);

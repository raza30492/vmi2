import React, { Component } from "react";
import { connect } from 'react-redux';

//components
import App from "grommet/components/App";
import Split from 'grommet/components/Split';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Sidebar from 'grommet/components/Sidebar';
import Anchor from 'grommet/components/Anchor';

import NavSidebar from "./NavSidebar";


class Main extends Component {
  render () {
    const { active } = this.props.nav;

    var pane1 = active ? <NavSidebar /> : null;
    var pane2 = this.props.children;

    return (
      <App centered={false}>
        <Split flex="right">
          {pane1}
          {pane2}
        </Split>
      </App>
    );
  }
}

let select = (store) => {
  return {nav: store.nav};
};

export default connect(select)(Main);

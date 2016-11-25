import React, { Component } from "react";
// import { reduxForm, Field } from 'redux-form';
import Dropzone from 'react-dropzone';

import AppHeader from './AppHeader';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Section from 'grommet/components/Section';

// const FILE_FIELD_NAME = 'files';

export default class SKU extends Component {
  constructor () {
    super();
    this.state = {
      files : []
    };
    this._onDrop = this._onDrop.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onDrop (files) {
    if (files.length > 1) {
      alert("Select Only 1 File.");
      this.setState({files: []});
      return;
    }
    console.log(files);
    this.setState({files: files});
  }

  _onSubmit (e) {
    //e.preventDefault();
    var data = new FormData();
    data.append("file", this.state.files[0]);
    const options = {
      method: 'post',
      body: data
    };

    fetch(window.serviceHost + "/upload", options)
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  render () {
    //const { handleSubmit, reset} = this.props;
    const { files } = this.state;
    let content = files.length > 0 ? (<div>{files[0].name}</div>) : <div>Drop Files here</div>;
    return (
      <div>
		    <AppHeader />
        <Section direction="column" pad={{vertical: 'large', horizontal:'small'}}>
          <Box>
            <Dropzone onDrop={this._onDrop}  accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
              {content}
            </Dropzone>
          </Box>
          <Box>
            <Button label="Submit" onClick={this._onSubmit} />
          </Box>
        </Section>
			</div>
    );
  };
}

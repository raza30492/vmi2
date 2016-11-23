import React, { Component } from "react";
import { headers } from 'grommet/utils/Rest';
import { handleErrors } from '../utils/restUtil';

import Add from "grommet/components/icons/base/Add";
import AppHeader from './AppHeader';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Close from "grommet/components/icons/base/Close";
import Edit from "grommet/components/icons/base/Edit";
import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Layer from 'grommet/components/Layer';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';
import Section from 'grommet/components/Section';

export default class Fit extends Component {
  constructor () {
    super();
    this.state = {
      hideAddForm: true,
      hideEditForm: true,
      count: 0,
      fits : [],
      fitName: ''
    };
    this._onLoad = this._onLoad.bind(this);
    this._addFit = this._addFit.bind(this);
    this._editFit = this._editFit.bind(this);
  }

  componentDidMount () {
    this._onLoad();
  }

  _onLoad () {
    const options = {method: 'GET', headers: {...headers}};
    fetch(window.serviceHost + '/fits', options)
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
      let fits = data._embedded.fits.map(fit => {
        return { href: fit._links.self.href, name: fit.name};
      });
      this.setState({fits:fits, count:fits.length});
    })
    .catch(error => {
      console.log(error);
    });
  }

  _removeFit (href) {
    const options = {method: 'DELETE', headers: {...headers}};
    fetch(href, options)
    .then(handleErrors)
    .then(response => {
      this._onLoad();
    })
    .catch(error => {
      console.log(error);
    });
  }

  _editFit () {
    const { fitName, href } = this.state;
    if (fitName == null || fitName == "") {
      alert("Enetr Fit Name First!");
      return;
    }
    const data = {name: fitName};
    const options = {method: 'PUT', headers: {...headers}, body: JSON.stringify(data)};
    fetch(href, options)
    .then(handleErrors)
    .then((response) => {
      if (response.status == 409) {
        alert('Duplicate Entry!');
      }else{
        console.log(data);
        this._onLoad();
        this.setState({hideEditForm:true, fitName:''});
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  _onEditClick (name, href) {
    this.setState({hideEditForm:false,fitName:name, href: href});
  }

  _onAddClick () {
    this.setState({hideAddForm:false});
  }

  _onCloseLayer (layer) {
    if( layer == 'add')
      this.setState({hideAddForm:true});
    else
      this.setState({hideEditForm:true});
  }

  _onChangeInput (e) {
    this.setState({fitName:e.target.value});
  }
  _addFit () {
    const { fitName } = this.state;
    if (fitName == null || fitName == "") {
      alert("Enetr Fit Name First!");
      return;
    }
    const data = {name: fitName};
    const options = {method: 'POST', headers: {...headers}, body: JSON.stringify(data)};
    fetch(window.serviceHost + '/fits', options)
    .then(handleErrors)
    .then((response) => {
      if (response.status == 409) {
        alert('Duplicate Entry!');
      }else{
        console.log(data);
        this._onLoad();
        this.setState({hideAddForm:true, fitName:''});
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  render () {
    let { fits, count } = this.state;
    let items = fits.map(fit => {
      return (
        <ListItem key={fit.href} justify="between" pad={{vertical:'none',horizontal:'small'}} >
          <span> {fit.name} </span>
          <span className="secondary">
            <Button icon={<Edit />} onClick={this._onEditClick.bind(this, fit.name, fit.href)}/>
            <Button icon={<Close />} onClick={this._removeFit.bind(this, fit.href)} />
          </span>
        </ListItem>
      );
    });

    const layerAdd = (
      <Layer hidden={this.state.hideAddForm} onClose={this._onCloseLayer.bind(this, 'add')}  closer={true} align="center">
        <Form>
          <Header><Heading tag="h3" strong={true}>Add New Fit</Heading></Header>
          <FormFields>
              <FormField label="Fit name" >
                <input type="text" value={this.state.fitName} onChange={this._onChangeInput.bind(this)} />
              </FormField>
          </FormFields>
          <Footer pad={{"vertical": "medium"}} >
            <Button label="Add" primary={true}  onClick={this._addFit} />
          </Footer>
        </Form>
      </Layer>
    );

    const layerEdit = (
      <Layer hidden={this.state.hideEditForm} onClose={this._onCloseLayer.bind(this, 'edit')} closer={true} align="center">
        <Form>
          <Header><Heading tag="h3" strong={true}>Edit Fit</Heading></Header>
          <FormFields>
              <FormField label="Fit name" >
                <input type="text" value={this.state.fitName} onChange={this._onChangeInput.bind(this)}/>
              </FormField>
          </FormFields>
          <Footer pad={{"vertical": "medium"}} >
            <Button label="Edit" primary={true}  onClick={this._editFit} />
          </Footer>
        </Form>
      </Layer>
    );

    return (
      <div>
			    <AppHeader />

  			  <Section size="auto" pad={{horizontal: 'large'}} full="horizontal" wrap={true} justify="center">
            <Heading tag='h2' align="center" >Fits</Heading>
            <List selectable={true} >
              {items}
            </List>
            <ListPlaceholder unfilteredTotal={count} filteredTotal={count} emptyMessage="You do not have any items at the moment." />
            <Box size="small" alignSelf="center" pad={{vertical:'large'}}>
              <Button icon={<Add />} label="Add item" primary={true} a11yTitle="Add item" onClick={this._onAddClick.bind(this)}/>
            </Box>
          </Section>

          {layerAdd}
          {layerEdit}
			</div>
    );
  };
}

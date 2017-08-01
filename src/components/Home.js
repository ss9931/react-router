import React, { Component } from 'react';
import { Button ,ButtonGroup,DropdownButton,MenuItem,ButtonToolbar} from 'react-bootstrap';

const buttonGroupInstance = (
  <ButtonGroup vertical block>
    <Button>Full width button</Button>
    <Button>Full width button</Button>
  </ButtonGroup>
);

const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

function renderDropdownButton(title, i) {
  return (
    <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>Active Item</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  );
}

const buttonsInstance = (
  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
);


class Home extends Component {
    render() {
        return (
            <div>
               <h1>来啊来啊，都来玩啊！！！ </h1>
               {buttonsInstance}<hr/>
               <Button bsStyle="success">Success</Button><hr/>
               {buttonGroupInstance}<br/>
               
            </div>
        );
    }
}

export default Home;
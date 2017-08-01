import React, { Component } from 'react';
import { Button,ButtonToolbar,ButtonGroup,Glyphicon} from 'react-bootstrap';


const glyphInstance = (
  <div>
    <ButtonToolbar>
      <ButtonGroup>
        <Button><Glyphicon glyph="align-left" /></Button>
        <Button><Glyphicon glyph="align-center" /></Button>
        <Button><Glyphicon glyph="align-right" /></Button>
        <Button><Glyphicon glyph="align-justify" /></Button>
      </ButtonGroup>
    </ButtonToolbar>
    <hr/>
    <ButtonToolbar>
      <ButtonGroup>
        <Button bsSize="large"><Glyphicon glyph="star" /> Star</Button>
        <Button><Glyphicon glyph="star" /> Star</Button>
        <Button bsSize="small"><Glyphicon glyph="star" /> Star</Button>
        <Button bsSize="xsmall"><Glyphicon glyph="star" /> Star</Button>
      </ButtonGroup>
    </ButtonToolbar>
  </div>
);



class About extends Component {
    render() {
        return (
            <div>
                关于我们
                {glyphInstance}
            </div>
        );
    }
}

export default About;
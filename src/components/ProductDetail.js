import React, { Component } from 'react';
import { Button ,ButtonGroup,ButtonToolbar} from 'react-bootstrap';


const buttonGroupInstance = (
  <ButtonToolbar>
    <ButtonGroup>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button>5</Button>
      <Button>6</Button>
      <Button>7</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button>8</Button>
      <Button>9</Button>
    </ButtonGroup>
  </ButtonToolbar>
);


class ProductDetail extends Component {
    render() {
        let products={
            "1":[
                {name:"嘿嘿"},
                {name:"嘿嘿2"}
            ],
            "2":[
                {name:"你1"},
                {name:"你2"}
            ],
            "3":[
                {name:"我1"},
                {name:"我2"}
            ],
            "4":[
                {name:"他1"},
                {name:"他2"}
            ],
        }
        let arr=products[this.props.match.params.id];

        let divs=arr.map(function(item,i){
                    return <div key={i}>{item.name}</div>
                });

        return (
            <div>
                {divs}
                {buttonGroupInstance}
            </div>
        );
    }
}

export default ProductDetail;
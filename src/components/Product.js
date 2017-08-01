import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import ProductDetail from './ProductDetail';

class Product extends Component {
    render() {
            let {url}=this.props.match;
        return (
            <div>
               <ul>
                   <li><Link to={`${url}/1`}>嘿</Link></li>
                   <li><Link to={`${url}/2`}>你</Link></li>
                   <li><Link to={`${url}/3`}>我</Link></li>
                   <li><Link to={`${url}/4`}>他</Link></li>
                </ul> 

                <Route path={`${url}/:id`} component={ProductDetail}/>
            </div>
        );
    }
}

export default Product;
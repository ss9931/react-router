import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/product">产品</Link></li>
                    <li><Link to="/guanyu">关于</Link></li>
                    <li><Link to="/guanyu">关于我们</Link></li>
                </ul>
            </div>
        );
    }
}

export default Nav;
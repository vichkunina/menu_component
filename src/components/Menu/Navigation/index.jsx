import React, { Component } from 'react';
import b_ from 'b_';

import Logo from '../Logo'

import './index.css';

const b = b_.with('navigation');

export default class Navigation extends Component {
    render() {
        const { navLinks, size, logo } = this.props;
        
        return (
            <nav className={b({ size })}>
                { logo ? Logo({logo}) : null}
                <ul className={b('wrapper')}>
                    {navLinks.map((hrefObj, index) => (
                        <li key={index} className={b('item')}>
                            <a className={b('item-href')} href={hrefObj.href}>
                                {hrefObj.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

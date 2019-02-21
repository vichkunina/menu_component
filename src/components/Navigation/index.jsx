import React, { Component } from 'react';
import b_ from 'b_'

import './index.css';

const b = b_.with('navigation')

export default class Navigation extends Component {
    render() {
        const { hrefArray, size } = this.props
        return (
          <nav className={b({size})}>
            <ul className={b('wrapper')}>
                {
                    hrefArray.map(hrefObj => (
                        <li className={b('item')}>
                            <a className={b('item-href')}
                                href={hrefObj.href}>
                                    {hrefObj.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
          </nav>
        );
    }
}

import React, { Component } from 'react';
import b_ from 'b_';

import Content from '../Content';
import Hamburger from '../Icon';

import './index.css';

const b = b_.with('menu');

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menu: false
        };
    }
    changeMenuVisibility = () => {
        this.setState({ menu: !this.state.menu });
    };
    render() {
        const { hrefArray, size, sections, footer } = this.props;
        const { menu } = this.state;

        return (
            <div className={b({ size })}>
                <Hamburger handleClick={this.changeMenuVisibility} />
                <Content
                    menu={menu}
                    hrefArray={hrefArray}
                    size={size}
                    sections={sections}
                    footer={footer}
                />
            </div>
        );
    }
}

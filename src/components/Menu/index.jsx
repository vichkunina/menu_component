import React, { Component } from 'react';
import b_ from 'b_';

import Content from '../Content';
import Hamburger from '../Icon';

import './index.css';

const b = b_.with('menu');

export default class Menu extends Component {
    state = {
        isMenuVisible: false
    };

    changeMenuVisibility = () => {
        this.setState(prevState => ({ isMenuVisible: !prevState.isMenuVisible }));
    };

    render() {
        const { navLinks, size, sections, footer, logo } = this.props;
        const { isMenuVisible } = this.state;

        return (
            <div className={b({ size })}>
                <Hamburger handleClick={this.changeMenuVisibility} />
                <Content
                  menu={isMenuVisible}
                  navLinks={navLinks}
                  size={size}
                  sections={sections}
                  footer={footer}
                  logo={logo}
                />
            </div>
        );
    }
}

Menu.defaultProps = {
    navLinks: [{name: null, href: null}],
    size: "full",
    sections: [{content: null, title: {name: null}}],
    footer: {content: null}
}

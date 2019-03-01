import React, { Component } from 'react';
import b_ from 'b_';
import './index.css';

const b = b_.with('hamburger');

export default class Hamburger extends Component {
    hanleIconClick = () => {
        this.props.handleClick();
    };

    render() {
        const iconClass = this.props.isMenuVisible ? b({ active: true }) : b();

        return (
            <div onClick={this.hanleIconClick} className={iconClass}>
                <span className={b('line')} />
                <span className={b('line')} />
                <span className={b('line')} />
            </div>
        );
    }
}

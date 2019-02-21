import React, { Component } from 'react';
import b_ from 'b_'
import './index.css';

const b = b_.with('hamburger')

export default class Hamburger extends Component {
    constructor(){
        super()
        this.state ={
            opened: false
        }
    }
    
    hanleIconClick = () => {
        this.props.handleClick()
        this.setState({ opened: !this.state.opened })
    }
    render() {
        const iconClass = this.state.opened ? b({'active': true}) : b()

        return (
            <div onClick={this.hanleIconClick} className={iconClass}>
              <span className={b('line')}></span>
              <span className={b('line')}></span>
              <span className={b('line')}></span>
            </div>
        );
    }
}

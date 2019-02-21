import React, { Component } from 'react';
import b_ from 'b_'

import './index.css';

const b = b_.with('footer')

export default class Footer extends Component {
    render() {
        const { footer } = this.props
        
        return (
            <footer className={b()}>{footer.content}</footer>
        )
    }
}

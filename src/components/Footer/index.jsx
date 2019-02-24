import React from 'react';
import b_ from 'b_';

import './index.css';

const b = b_.with('footer');

const Footer = props => <footer className={b()}>{props.footer.content}</footer>;


export default Footer;

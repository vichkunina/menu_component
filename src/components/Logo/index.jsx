import React from 'react';
import b_ from 'b_';

import './index.css';

const b = b_.with('logo');

const Logo = props => <div className={b()}>{props.logo.content}</div>;


export default Logo;

import React, { Component } from 'react';
import b_ from 'b_';

import './index.css';

const b = b_.with('section');

export default class Section extends Component {
    constructor() {
        super();
        this.state = {};
    }

    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        color += '5c';
        return color;
    };

    render() {
        const { sections } = this.props;
        return (
            <artice className={'sections'}>
                {sections.map((section, index) => (
                    <section
                        key={index}
                        style={{
                            backgroundColor: this.state[`hovered_${index}`]
                        }}
                        onMouseOver={() => {
                            const color = this.getRandomColor();
                            this.setState({ [`hovered_${index}`]: color });
                        }}
                        onMouseOut={() => {
                            this.setState({ [`hovered_${index}`]: false });
                        }}
                        className={b()}
                    >
                        <header className={b('title')}>
                            {section.title.name ? (
                                <a href={section.title.href}>
                                    {section.title.name}
                                </a>
                            ) : (
                                section.title.name
                            )}
                        </header>
                        {section.content}
                    </section>
                ))}
            </artice>
        );
    }
}

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
        const letters = '0123456789ABCDEF';
        const color = '#';
        
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        color += '5c';

        return color;
    };

    handeMouseOver = (index) => {
        const color = this.getRandomColor();
        this.setState({ [`hovered_${index}`]: color });
    }

    handeMouseOut = (index) => {
        this.setState({ [`hovered_${index}`]: false });
    }

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
                        onMouseOver={() => this.handeMouseOver(index)}
                        onMouseOut={() => this.handeMouseOut(index)}
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

import React, { Component } from 'react';
import b_ from 'b_';

import './index.css';

const b = b_.with('section');

export default class Sections extends Component {
    state = {};

    componentDidMount() {
        const sectionsLength = this.props.sections.length;

        for (let i = 0; i < sectionsLength; i++) {
            const color = this.getBackgroundColor()
            this.setState({ [`hovered_${i}`]: color })
        }
    }

    getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        color += '5c';

        return color;
    };

    getBackgroundColor = () => `#808080${Math.floor(Math.random() * 5 + 4)}a`;

    handeMouseOver = (index) => {
        const color = this.getRandomColor();

        this.setState({ [`hovered_${index}`]: color });
    }

    handeMouseOut = (index) => {
        const color = '#8080803a'

        this.setState({ [`hovered_${index}`]: color });
    }

    render() {
        const { sections } = this.props;

        return (
            <article className={'sections'}>
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
                            {section.title.href ? (
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
            </article>
        );
    }
}

import React, { Component } from 'react';
import b_ from 'b_';

import Navigation from '../Navigation';
import Sections from '../Sections';
import Footer from '../Footer';

import './index.css';

const b = b_.with('content');

export default class Content extends Component {
    state = {
        transform: 'translateX(-100%)',
        menuVisibility: false
    }

    static getDerivedStateFromProps(props, state) {
        const prevProps = state.menuVisibility || {};

        if (props.menu !== prevProps) {
            if(props.menu) {
                return { 
                    transform: `translateX(0)`,
                    menuVisibility: true
                };
            } else {
                return { 
                    transform: `translateX(-100%)`,
                    menuVisibility: false
                };
            }
        }

        return null;
    }

    getTouchDescription(e) {
        return {
            width: document.body.clientWidth,
            touchPosition: e.changedTouches[0].pageX
        }
    }

    handleTouchEnd(e) {
        const { width, touchPosition } = this.getTouchDescription(e);

        if(touchPosition > width * 0.5 && width <= 480) {
            this.setState({transform: `translateX(0)`});
        } else if (width <= 480) {
            this.props.changeMenuVisibility();
            this.setState({transform: `translateX(-100%)`});
        }
    }

    handleTouchMove(e) {
        const { width, touchPosition} = this.getTouchDescription(e)
        if(touchPosition > width * 0.85) {
            return
        }

        if (width <= 480) {
            const offsetX = width * 0.85 - touchPosition;

            this.setState({transform: `translateX(-${offsetX}px)`});
        }
    }

    render() {
      const { navLinks, size, sections, footer, menu, logo } = this.props;
      const { transform } = this.state;

      return (
        <div
            onTouchEnd={(e) => this.handleTouchEnd(e)}
            onTouchMove={(e) => this.handleTouchMove(e)}
            style={{
                'display': 'none',
                'transform': transform
            }}
            className={b()}>
                <Navigation navLinks={navLinks} size={size} logo={logo}/>
                <Sections sections={sections} />
                {Footer({footer})}
        </div>
      );
  }
}

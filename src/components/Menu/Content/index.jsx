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

    menuRef = React.createRef();

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

    getTouchDescription = e => ({
        width: document.body.clientWidth,
        touchPositionX: e.changedTouches[0].pageX,
        touchPositionY: e.changedTouches[0].pageY,
    });

    handleTouchEnd = (e) => {
        const {x, y} = this.prevPageCoordinates
        this.disableTouchMove = false;
        if(x === 0 && y === 0) {
            return;
        }
        this.setNewPageCoordinates({ x: 0, y: 0 });

        const { width } = this.getTouchDescription(e);

        if(this.lastDirection === 'right' && width <= 480) {
            this.setState({transform: `translateX(0)`});
        } else if (width <= 480 && this.lastDirection === 'left') {
            this.props.changeMenuVisibility();
            this.setState({transform: `translateX(-100%)`});
        }

        this.menuRef.current.style.transition = 'all .3s ease-out';
    }

    prevOffsetX = 0;
    setPrevOffsetX = offsetX => this.prevOffsetX = offsetX;

    prevTranslateX = 0;
    setPrevTranslateX = newTranslate => this.prevTranslateX = newTranslate;

    prevPageCoordinates = {
        x: 0,
        y: 0
    };

    setNewPageCoordinates = ({ x, y }) => {
        this.prevPageCoordinates = { x, y };
    }

    lastDirection = '';
    lastMoveDirection = newX  => {
        const { x } = this.prevPageCoordinates;
    
        this.lastDirection = newX - x < 0 ? 'left': 'right';
    }

    isNeededScroll = (newX, newY) => {
        const { x, y } = this.prevPageCoordinates;
        const isVerticalScroll = x !== 0 && y !== 0
            && Math.abs(newX - x) < Math.abs(newY - y) && !this.prevTranslateX;

        this.setNewPageCoordinates({ x: newX, y: newY });

        this.disableTouchMove = isVerticalScroll;

        return isVerticalScroll;
    }
    disableTouchMove = false;

    handleTouchMove = e => {
        const { width, touchPositionX, touchPositionY } = this.getTouchDescription(e);


        if (this.disableTouchMove) {
            return;
        }

        this.lastMoveDirection(touchPositionX);

        if (this.isNeededScroll(touchPositionX, touchPositionY)) {
            return;
        }

        if(touchPositionX > width * 0.85 || width > 480) {
            return;
        }

        const offsetX = width * 0.85 - touchPositionX;

        if (this.prevOffsetX === 0) {
            this.setPrevOffsetX(offsetX);

            return;
        }

        const finalOffset = offsetX - this.prevOffsetX;

        const translateValue = this.prevTranslateX + finalOffset;

        this.setState({transform: `translateX(-${translateValue}px)`}, () => {
            this.setPrevOffsetX(offsetX);
            this.setPrevTranslateX(translateValue);
            
        });
    }

    handleTouchStart = () => {
        if(this.menuRef) {
            this.menuRef.current.style.transition = 'none'
        }
        this.prevOffsetX = 0;
        this.prevTranslateX = 0;
    }

    render() {
      const { navLinks, size, sections, footer, logo } = this.props;
      const { transform } = this.state;

      return (
        <div
            ref={this.menuRef}
            onTouchStart={this.handleTouchStart}
            onTouchEnd={e => this.handleTouchEnd(e)}
            onTouchMove={e => this.handleTouchMove(e)}
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

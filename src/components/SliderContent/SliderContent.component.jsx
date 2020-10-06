import React, { Component } from 'react';

import Slide from './../Slide/Slide.component';
import Arrow from './../Arrow/Arrow.component';
import Dots from './../Dots/Dots.component';

import './SliderContent.styles.css';


class SliderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderOptions: [
                { name: 'one', file: 'one.jpg' },
                { name: 'two', file: 'two.jpg' },
                { name: 'three', file: 'three.jpg' },
                { name: 'four', file: 'four.jpg' }
            ],
            activeIndex: 0
        }
    }

    handleNext = () => {
        const { sliderOptions, activeIndex } = this.state;
        console.log(activeIndex)
        if(activeIndex === sliderOptions.length - 1) {
            return this.setState(prevState => {
                return {
                    ...prevState,
                    activeIndex: 0
                }
            })
        }
        this.setState(prevState => {
            return {
                ...prevState,
                activeIndex: prevState.activeIndex + 1
            }
        })
    }

    handlePrev = () => {
        const { activeIndex } = this.state;
        console.log(activeIndex)
        if(activeIndex === 0) {
            return;
        }
        this.setState(prevState => {
            return {
                ...prevState,
                activeIndex: prevState.activeIndex - 1
            }
        })
    }
    render() {
        const { activeIndex, sliderOptions } = this.state;
        const slideActive = {...sliderOptions[activeIndex]};
        return(
            <div className = 'slider'>

                <Slide 
                    file = {slideActive.file} 
                    name = {slideActive.name} 
                    key = {slideActive.name} />

                <Arrow direction = 'left' className = 'left__arrow' click = {this.handlePrev} />
                <Arrow direction = 'right' className = 'right__arrow' click = {this.handleNext} />

                <div className = 'slider__dots'>

                    {sliderOptions.map((slide, index) => 
                        <Dots key = {index+slide.name} active = {activeIndex === index ? true : false} />
                    )}

                </div>

            </div>
        )
    }
}

export default SliderComponent;
import React, { Component } from 'react';
import './leftColumn.css'

class About extends Component {

    render() {
        return (
            <div className="section about">
                <header className="section-header">
                    <svg class="icon icon-dots-three-horizontal">
                        <use xlinkHref="#icon-dots-three-horizontal"></use>
                    </svg>
                    <h3 className="section-title">About</h3>
                </header>
                <div className="section-body">
                    <p>
                        Hello! I'm Victor JordanProactive, responsible Front-end developer focused on Web Systems. 
                        Known to possess strong technical knowledge and to deliver solid systems. 
                        More than 3 years' experience developing successful systems with front-end frameworks, such as Angular (2+), 
                        Ember and AngularJS. Active in open source communities such as GitHub.
                    </p>
                </div>
            </div>
        );
    }

}

class Skills extends Component {

    render() {
        return (

            <div className="section skills">
                <header className="section-header">
                    <svg class="icon icon-star"><use xlinkHref="#icon-star"></use></svg>
                    <h3 className="section-title">Skills</h3>
                </header>
                <div className="section-body">
                    <div class="wrapper">
                        <div class="skill">
                            <p>HTML5</p>
                            <div class="skill-bar wow slideInLeft animated" style={{width:'90%'}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}


export default class LeftColumn extends Component {

    render() {
        return (
            <div>
                <About/>
                <Skills/>
            </div>
        )
    }

}
import React, { Component } from 'react';
import './leftColumn.css'

class About extends Component {

    render() {
        return (
            <div className="section about">
                <header className="section-header">
                    <svg className="icon icon-dots-three-horizontal">
                        <use xlinkHref="#icon-dots-three-horizontal"></use>
                    </svg>
                    <h3 className="section-title">About</h3>
                    <span className="section-title-line"></span>
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

        const arraySkills = [
            {id: 1, name: 'HTML5 | CSS3', percent: '95%'},
            {id: 2, name: 'Javascript', percent: '90%'},
            {id: 3, name: 'Pre-processor (Sass, Less)', percent: '80%'},
            {id: 4, name: 'AngularJS | Angular (2+)', percent: '90%'},
            {id: 5, name: 'React | Ember', percent: '65%'},
            {id: 6, name: 'Git | Git flow', percent: '80%'},
            {id: 7, name: 'Cross browser | Responsive design', percent: '80%'},
            {id: 8, name: 'Travis CI', percent: '60%'},
        ]

        return (

            <div className="section skills">
                <header className="section-header">
                    <svg className="icon icon-star"><use xlinkHref="#icon-star"></use></svg>
                    <h3 className="section-title">Skills</h3>
                    <span className="section-title-line"></span>
                </header>
                <div className="section-body">
                    {
                    arraySkills.map(skill => {
                        return (
                            <div className="wrapper" key={skill.id}>
                                <div className="skill">
                                    <p>{skill.name}</p>
                                    <div className="skill-bar wow slideInLeft animated" style={{width: skill.percent}}></div>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>
            </div>

        );
    }

}

class Contact extends Component {

    render() {
        const arrayContact = [
            {id: 1, icon: 'mail', info: 'victorjordan95@gmail.com'},
            {id: 2, icon: 'phone', info: '+5512 98215-3860'},
            {id: 3, icon: 'github', info: '/victorjordan95'},
            {id: 4, icon: 'earth', info: 'victorjordan95.github.io'},
            {id: 5, icon: 'location', info: 'Sao Jose dos Campos, Sao Paulo, Brazil'},

        ]

        return(
            <div className="section about">
            <header className="section-header">
                <svg className="icon icon-message-circle">
                    <use xlinkHref="#icon-message-circle"></use>
                </svg>
                <h3 className="section-title" style={{left: '-24px'}}>Contact</h3>
                <span className="section-title-line"></span>
            </header>
            <div className="section-body">
                {
                    arrayContact.map(contact => {
                        return (
                            <div className="contact-info"  key={contact.id}>
                                <svg className={`icon icon-${contact.icon}`}>
                                    <use xlinkHref={`#icon-${contact.icon}`}></use>
                                </svg>
                                <span>{contact.info}</span>
                            </div>
                        )
                    })
                }
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
                <Contact/>
            </div>
        )
    }

}
import React, { Component } from 'react';
import './rightColumn.css';

class Experience extends Component {
    render() {
        const experiences = [
            {
                id: 1,
                period: {
                    start: 'January 2017',
                    end: 'February 2018'
                },
                role: 'Front-end Developer',
                company: 'Mult-e',
                companyDescription: 'Mult-e Engenharia Digital is an IT service provider specialized in the productive sector whose main competences are the development and integration of information systems.',
                location: 'São José dos Campos, São Paulo - Brazil',
                description: "At Mult-e, I worked with support and creation new Embraer web pages, working with agile methodology, best usability and programming practices, using CSS Preprocessor (SASS) and task manager (Gulp). Web applications development with AngularJS and Ember, redesign of new Mult-e oﬃcial website using best practices of SEO and developing thinking at the application performance. Also, I worked with wireframe creation, prototyping new interfaces and caring about the user experience"
            },{
                id: 2,
                period: {
                    start: 'February 2018',
                    end: 'February 2019'
                },
                role: 'Front-end Developer',
                company: 'FITec',
                companyDescription: 'FITec is a not-for-profit private foundation, accredited by the Science and Technology Ministry, together with Information Technology Area Committee (CATI).',
                location: 'São José dos Campos, São Paulo - Brazil',
                description: "My main role at FITec is front-end development for Ericsson projects, at innovation team, working with Angular (2+), SASS, ES6 and web semantic. Besides that, I have worked in a project for the own FITec, a webapp for employees management, where I made the technical requirements research, drawing, validating and building the interface, using Angular to connect with an API built in Java and making queries MongoDB."
            },{
                id: 3,
                period: {
                    start: 'February 2019',
                    end: 'Currently'
                },
                role: 'Front-end Developer',
                company: 'Gauge',
                companyDescription: 'Gauge is a digital intelligence consultancy whose focus is to analyze, measure and plan the best digital targeting so that your customers can reconcile their business objectives with the wishes of their consumers.',
                location: 'São José dos Campos, São Paulo - Brazil',
                description: "Development with React and Angular"
            },
        ].reverse();
        return (
            <div className="section about">
                <header className="section-header" style={{margin: '0 0 24px', justifyContent: 'flex-start'}}>
                    <svg className="icon icon-laptop" style={{position: 'relative', left: '-12px', margin: '0 24px 0 0'}}>
                        <use xlinkHref="#icon-laptop"></use>
                    </svg>
                    <h3 className="section-title" style={{left: '-8px'}}>Experience</h3>
                    <span className="section-title-line" style={{width: '70%'}}></span>
                </header>
                {
                    experiences.map(experience => {

                        return (
                            <div className="experience-body"  key={experience.id}>
                                <div className="experience-separator">
                                    <span>■</span>
                                </div>
                                <div className="experience-period">
                                    <span>{experience.period.start} -</span>
                                    <span>{experience.period.end}</span>
                                </div>
                                <div className="experience-description">
                                    <header className="experience-description-title">
                                        <h3>{experience.role} - {experience.company}</h3>
                                        <h4>{experience.location}</h4>
                                    </header>
                                    <div className="experience-description-body">
                                        <i style={{color: '#616161', fontSize: '14px', top: '-8px', position: 'relative'}}>
                                            "{experience.companyDescription}"
                                        </i>
                                        <p>{experience.description}</p>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        );
    }
}

class Education extends Component {
    render() {
        return (
            <div className="section about">
                <header className="section-header" style={{margin: '0 0 24px', justifyContent: 'flex-start'}}>
                    <svg className="icon icon-education" style={{position: 'relative', left: '-12px', margin: '0 24px 0 0'}}>
                        <use xlinkHref="#icon-education"></use>
                    </svg>
                    <h3 className="section-title" style={{left: '-8px'}}>Education</h3>
                    <span className="section-title-line" style={{width: '70%'}}></span>
                </header>
                <div className="experience-body">
                    <div className="experience-separator">
                        <span>■</span>
                    </div>
                    <div className="experience-description">
                        <header className="experience-description-title">
                            <h3>University “FATEC – Prof. Jessen Vidal” (FATEC)</h3>
                            <h4> Sao Jose dos Campos (SP), Brazil</h4>
                        </header>
                        <div className="experience-description-body">
                            {/* <i style={{color: '#616161', fontSize: '14px', top: '-8px', position: 'relative'}}>
                                "{experience.companyDescription}"
                            </i> */}
                            <p>Associate Degree in Database Administration</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default class RightColumn extends Component {

    render() {
        return (
            <div>
                <Experience/>
                <Education/>
            </div>
        )
    }

}
import React, { Component } from 'react';
import LeftColumn from './leftColumn/leftColumn';
import RightColumn from './rightColumn/rightColumn';

import './curriculo.css'

export default class Curriculo extends Component {

    render() {
        return (
            <main className="content">
                <div className="left-side">
                    <LeftColumn/>
                </div>
                <div className="right-side">
                    <RightColumn/>
                </div>
            </main>
        )
    }

}
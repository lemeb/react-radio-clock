import React from 'react';
import ReactDOM from 'react-dom';
import AnalogClock, { Themes } from '../src/index';

const WIDTH = 200;
const GMTOFFSET= "+2";

const Component = (
    <div>
        <span><AnalogClock width={WIDTH} theme={Themes.light} /></span>
        <span><AnalogClock width={WIDTH} theme={Themes.radio} /></span>
        <h2>With GMT Offset {GMTOFFSET}:</h2>
        <span><AnalogClock width={WIDTH} theme={Themes.radio} gmtOffset={GMTOFFSET} /></span>
    </div>
);

ReactDOM.render(Component, document.getElementById('app'));

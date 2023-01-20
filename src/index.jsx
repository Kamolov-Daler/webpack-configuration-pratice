import Post from '@models/Post'
import './styles/style.css'
import './styles/less.less'
import './styles/scss.scss'
// import json from './assets/json'
import WebpackLogo from './assets/webpack-logo'
import './babel.js'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import React from 'react'
import { render } from 'react-dom'

const post = new Post('Webpack KD', WebpackLogo);

const App = () => {
    return (
        <div className="container">
            <h1>Webpack KamolovD</h1>

            <hr />

            <div className="logo">
                <img width="200" height="200" src={WebpackLogo} alt={WebpackLogo}/>
            </div>

            <hr />

            <h4>Test1</h4>

            <pre></pre>

            <hr />

            <div className="box">
                <h2>Less</h2>
            </div>

            <hr />

            <div className="card">
                <h2>Sass</h2>
            </div>
        </div>
    )
}

render(<App />, document.getElementById('app'))

// console.log('JSON', json)
// console.log('XML:', xml)
// console.log('CSV', csv)
import * as $ from 'jquery';
import Post from '@models/Post'
import './styles/style.css'
import './styles/less.less'
import './styles/scss.scss'
// import json from './assets/json'
import WebpackLogo from './assets/webpack-logo'
import './babel.js'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'

const post = new Post('Webpack KD', WebpackLogo);

let jsonstring = 'json';

$('pre').addClass('code').html(post.toString())
$('.logo').css("background-image", `url(${WebpackLogo})`)

// console.log('JSON', json)
// console.log('XML:', xml)
// console.log('CSV', csv)
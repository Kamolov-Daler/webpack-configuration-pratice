import Post from './Post'
import './styles/style.css'
import json from './assets/json'

const post = new Post('Webpack KD');

let jsonstring = 'json';

console.log('post to string', post.toString())

console.log('JSON', json)
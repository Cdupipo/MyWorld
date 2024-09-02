import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
toggle.onclick = function(){
    menu.classList.toggle('active');
}

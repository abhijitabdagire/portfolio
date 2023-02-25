let html_bar = document.getElementById('html-bar');
let css_bar = document.getElementById('css-bar');
let js_bar = document.getElementById('js-bar');
let c_bar = document.getElementById('c-bar');
let cpp_bar = document.getElementById('cpp-bar');
let react_bar = document.getElementById('react-bar');

let skill_nav = document.getElementById('skill-nav');
let skill = document.getElementById('skill');

skill_nav.addEventListener('click', () => {
    html_bar.classList.remove('html');
    css_bar.classList.remove('css');
    js_bar.classList.remove('JavaScript');
    c_bar.classList.remove('c');
    cpp_bar.classList.remove('cpp');
    react_bar.classList.remove('React');
    var t1 = setTimeout(()=>{
        html_bar.classList.add('html');
        css_bar.classList.add('css');
        js_bar.classList.add('JavaScript');
        c_bar.classList.add('c');
        cpp_bar.classList.add('cpp');
        react_bar.classList.add('React');
    }, 500);

})

// Right Click Disable

// document.addEventListener('contextmenu', event => event.preventDefault());

// Hamburger Icon
var hamburger_icon = document.getElementById('metaMenu-hide');
var nav_links = document.getElementById('nav-bar-hide');
var header = document.getElementById('header');
var status1 = false;
hamburger_icon.addEventListener('click', function(){
    if(status1 == false){
        nav_links.style.display = 'block';
        header.style.display = 'grid';
        header.style.gridTemplateColumns = 'auto auto';
        status1 = true;
    }
    else{
        nav_links.style.display = 'none';
        header.style.display = 'flex';
        status1 = false;
    }
});

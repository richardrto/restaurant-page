import loadHome from './home.js';
import loadContact from './contact.js';
import loadMenu from './menu.js';

window.onload = () => {
    loadHome();
}

const nav = document.createElement('div');
const content = document.querySelector('div#content');
document.body.insertBefore(nav, content);

const home = document.createElement('a');
home.textContent = 'Home';
nav.appendChild(home);
home.addEventListener('click', () => {
    content.innerHTML = '';
    loadHome();
})

const contact = document.createElement('a');
contact.textContent = 'Contact';
nav.appendChild(contact);
contact.addEventListener('click', () => {
    content.innerHTML = '';
    loadContact();
})

const menu = document.createElement('a');
menu.textContent = 'menu';
nav.appendChild(menu);
menu.addEventListener('click', () => {
    content.innerHTML = '';
    loadMenu();
})
    
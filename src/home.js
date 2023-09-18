import salmon from './salmon.jpg';

export default function loadHome() {
    const heading = document.createElement('h1');
    heading.textContent = 'Some good foods';
    content.appendChild(heading);

    const img = document.createElement('img');
    img.src = salmon;
    content.appendChild(img);
}
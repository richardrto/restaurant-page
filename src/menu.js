import greentea from './greentea.jpg';

export default function loadMenu() {
    const heading = document.createElement('h1');
    heading.textContent = 'Some good foods';
    content.appendChild(heading);

    const img = document.createElement('img');
    img.src = greentea;
    content.appendChild(img);
}
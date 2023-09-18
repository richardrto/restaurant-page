import bananas from './bananas.jpg';

export default function loadContact() {
    const heading = document.createElement('h1');
    heading.textContent = 'Some good foods';
    content.appendChild(heading);

    const img = document.createElement('img');
    img.src = bananas;
    content.appendChild(img);
}
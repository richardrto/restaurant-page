import honeyLemonGreenTea from './img/honey-lemon-green-tea.jpg';

const loadHome = function() {
    const contentDiv = document.querySelector('#content');

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('page');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to our restaurant~!';

    const description = document.createElement('p');
    description.textContent = 'This is a pretty great restaurant!';

    const img = document.createElement('img');
    img.src = honeyLemonGreenTea;

    homeDiv.append(heading, description, img);

    contentDiv.append(homeDiv);
}

export default loadHome;
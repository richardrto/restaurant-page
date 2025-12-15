import './style.css';
import loadHome from './loadHome.js';
import loadMenu from './loadMenu.js';

(function() {
    loadHome();

    let currentPage;

    const contentDiv = document.querySelector('#content');

    const navButtons = [...document.querySelectorAll('.navBtn')];
    navButtons.forEach(btn => {
        btn.addEventListener('click', handleNavBtnClick);
    })

    function handleNavBtnClick(event) {
        if (currentPage === event.target.textContent) {
            return;
        } else {
            contentDiv.replaceChildren();
            switch (event.target.textContent) {
                case 'Home':
                    loadHome();
                    currentPage = 'Home';
                    break;
                case 'Menu':
                    loadMenu();
                    currentPage = 'Menu';
                    break;
            }
        }
    }
})();


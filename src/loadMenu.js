const loadMenu = function() {
    const contentDiv = document.querySelector('#content');

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('page');

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    const description = document.createElement('p');
    description.textContent = 'Take a look at our menu!';

    const menuList = document.createElement('ul');

    const menuItems = ['Green tea', 'Bread'];
    menuItems.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = item;
        menuList.append(itemElement);
    })

    menuDiv.append(heading, description, menuList);

    contentDiv.append(menuDiv);
}

export default loadMenu;
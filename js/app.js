const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

listUl.addEventListener('click', (evt) => {
    if (evt.target.tagName == 'BUTTON') {
        if (evt.target.tagName == 'remove') {
            let li = evt.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if (evt.target.className == 'up') {
            let li = evt.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        }
    }
});


toggleList.addEventListener('click', () => {
    if (listDiv.style.display === 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
});

addItemButton.addEventListener('click', () => {
        let ul = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li');
        li.textContent = addItemInput.value;
        ul.appendChild(li);
        addItemInput.value = '';
});

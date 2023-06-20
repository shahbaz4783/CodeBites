const getInputField = document.getElementById('input-item');
const getAddBtn = document.getElementById('add-item');
const getSearchBar = document.getElementById('search-bar');
const getClearAllBtn = document.getElementById('clear-all');
const getSection = document.querySelector('section');

const addItem = () => {
    if (getInputField.value === ''){
        alert('Empty Field')
    } else {
        const item = document.createElement('div');
        item.innerHTML = getInputField.value;
        item.className = 'new-item'
        getSection.prepend(item)
        getInputField.value = '';

        const remove = document.createElement('div');
        remove.innerText = 'Remove';
        remove.className = 'removeBtn'
        item.append(remove);
        

        remove.addEventListener('click', () => {
            item.remove();
        })
    }
};

getAddBtn.addEventListener('click', addItem);
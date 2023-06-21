// get elements
const getInputField = document.getElementById('input-item');
const getAddBtn = document.getElementById('add-item');
const getSearchBar = document.getElementById('search-bar');
const getSearchTab = document.querySelector('.search-group');
const getClearAllBtn = document.getElementById('clear-all');
const getSection = document.querySelector('section');

// Function to add an item to local storage
const addItemLocally = (item) => {
	const items = getItemsFromLocalStorage();
	items.push(item);
	localStorage.setItem('items', JSON.stringify(items));
};

// Function to get all items from local storage
const getItemsFromLocalStorage = () => {
	const items = JSON.parse(localStorage.getItem('items')) || [];
	return items;
};

// Function to remove an item from local storage
const removeItemFromLocalStorage = (item) => {
	let items = getItemsFromLocalStorage();
	items = items.filter((storedItem) => storedItem !== item);
	localStorage.setItem('items', JSON.stringify(items));
};

// Add and Remove Items
const addItem = () => {
	if (getInputField.value === '') {
		alert('Empty Field');
	} else {
		const item = getInputField.value;

		addItemLocally(item);

		const listBox = document.createElement('div');
		listBox.className = 'box';
		getSection.prepend(listBox);

		const itemName = document.createElement('div');
		itemName.innerText = item;
		itemName.className = 'item';
		listBox.append(itemName);
		getInputField.value = '';

		const remove = document.createElement('div');
		remove.innerHTML =
			'<svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>';
		remove.className = 'removeBtn';
		listBox.append(remove);

		getSection.style.display = 'flex';
		getClearAllBtn.style.display = 'block';
		getSearchTab.style.display = 'block';

		remove.addEventListener('click', () => {
			listBox.remove();
			removeItemFromLocalStorage(item);

			getSection.style.display =
				getSection.children.length === 0 ? 'none' : 'flex';
			getSearchTab.style.display =
				getSection.children.length === 0 ? 'none' : 'block';
			getClearAllBtn.style.display =
				getSection.children.length === 0 ? 'none' : 'block';
		});
	}
};

// Reset Website UI
const resetUI = () => {
	while (getSection.firstChild) {
		getSection.firstChild.remove();
	}
	getSearchTab.style.display = 'none';
	getSection.style.display = 'none';
	getClearAllBtn.style.display = 'none';
	localStorage.removeItem('items');
};

// Search Items
const findItems = (e) => {
	const getItemBox = document.querySelectorAll('.box');
	const inputText = e.target.value.toLowerCase();

	getItemBox.forEach((item) => {
		const getText = item.firstChild.textContent.toLowerCase();

		if (getText.includes(inputText)) {
			item.style.display = 'flex';
		} else {
			item.style.display = 'none';
		}
	});
};

getAddBtn.addEventListener('click', addItem);
getClearAllBtn.addEventListener('click', resetUI);
getSearchBar.addEventListener('input', findItems);

// Initialize the items from local storage on page load
window.addEventListener('DOMContentLoaded', () => {
	const items = getItemsFromLocalStorage();
	items.forEach((item) => {
		const listBox = document.createElement('div');
		listBox.className = 'box';
		getSection.prepend(listBox);

		const itemName = document.createElement('div');
		itemName.innerText = item;
		itemName.className = 'item';
		listBox.append(itemName);

		const remove = document.createElement('div');
		remove.innerHTML =
			'<svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>';
		remove.className = 'removeBtn';
		listBox.append(remove);

		remove.addEventListener('click', () => {
			listBox.remove();
			removeItemFromLocalStorage(item);

			if (getSection.children.length === 0) {
				getSection.style.display = 'none';
				getSearchTab.style.display = 'none';
				getClearAllBtn.style.display = 'none';
			}
		});
	});

	getSection.style.display = items.length > 0 ? 'flex' : 'none';
	getClearAllBtn.style.display = items.length > 0 ? 'block' : 'none';
	getSearchTab.style.display = items.length > 0 ? 'block' : 'none';
});
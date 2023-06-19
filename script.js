const searchInput = document.querySelector('.input');
const cards = document.querySelectorAll('.card');

const searchResult = () => {
    const searchTerm = searchInput.value.toLowerCase();
  
    cards.forEach(card => {
        const cardTitle = card.querySelector('.title').textContent.toLowerCase();
        const cardDescription = card.querySelector('.card-front p').textContent.toLowerCase();
        const cardBackDescription = card.querySelector('.card-back p').textContent.toLowerCase();
        const cardShortDescription = card.querySelector('.card-front p:last-child').textContent.toLowerCase();
      
        if (cardTitle.includes(searchTerm) || cardDescription.includes(searchTerm) || cardBackDescription.includes(searchTerm) || cardShortDescription.includes(searchTerm)) {
            card.classList.add('fade-in');
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};

searchInput.addEventListener('input', searchResult);
const filterProjects = (query) => {
    const projectCards = document.querySelectorAll('.swiper-slide');
  
    projectCards.forEach((projectCard) => {
      const title = projectCard.querySelector('.text-title').textContent.toLowerCase();
      const description = projectCard.querySelector('.text-body').textContent.toLowerCase();
  
      if (title.includes(query) || description.includes(query)) {
        projectCard.style.display = 'block';
      } else {
        projectCard.style.display = 'none';
      }
    });
  };
  
  // Function to handle search input changes
  const handleSearchInput = () => {
    const searchInput = document.querySelector('.input');
    const query = searchInput.value.toLowerCase();
    filterProjects(query);
  };
  
  // Add event listener to the search input
  const searchInput = document.querySelector('.input');
  searchInput.addEventListener('input', handleSearchInput);
  
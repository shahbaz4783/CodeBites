// Fetching Project JSON File
const fetchAllProjects = async () => {
	const response = await fetch('/assets/projects.json');
	const data = await response.json();
	return data;
};

// Featured Sliding
const featured = async () => {
	const projects = await fetchAllProjects();
	const { tools: toolProjects } = projects;

    // const shuffledProjects = allProjects.sort(() => Math.random() - 0.5);

	toolProjects.forEach((project) => {
		const projectCard = document.createElement('div');
		projectCard.classList.add('swiper-slide');
		projectCard.innerHTML = `
        <div class="swiper-slide swiper-content">
        <div class="title" data-swiper-parallax="-300">${project.title}</div>
        <div class="text" data-swiper-parallax="-100">
          <p>${project.desc}</p>
        </div>
        <div>
            <a href="${project.web_url}" class="card-button">Preview Website</a>
            <a href="${project.code_url}" class="card-button">Explore Code</a>
        </div>
        </div>
        `;
		document.querySelector('.featured-slide .swiper-wrapper').append(projectCard);
		featuredSlider();
	});
};
fetchAllProjects().then(featured);

// Featured Sliding
const featuredSlider = () => {
    new Swiper('.mySwiper', {
        speed: 600,
        parallax: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
}



// Utility Tools
const tools = async () => {
	const projects = await fetchAllProjects();
	const { tools: toolProjects } = projects;

	toolProjects.forEach((tool) => {
		const projectCard = document.createElement('div');
		projectCard.classList.add('swiper-slide');
		projectCard.innerHTML = `
        <div class="card">
            <img class="card-image">
            <div>
                <a href="${tool.web_url}" class="card-button">Preview Website</a>
                <a href="${tool.code_url}" class="card-button">Explore Code</a>
            </div>
            <div class="card-description">
                <p class="text-title">${tool.title}</p>
                <p class="text-body">${tool.desc}</p>
            </div>
        </div>
        `;
		document.querySelector('.tools-list .swiper-wrapper').append(projectCard);
		projectlistSwiper();
	});
};

fetchAllProjects().then(tools);

// API Projects
const apiInt = async () => {
	const projects = await fetchAllProjects();
	const { 'api-apps': apiProjects } = projects;

	apiProjects.forEach((api) => {
		const projectCard = document.createElement('div');
		projectCard.classList.add('swiper-slide');
		projectCard.innerHTML = `
        <div class="card">
            <img class="card-image">
            <div>
                <a href="${api.web_url}" class="card-button">Preview Website</a>
                <a href="${api.code_url}" class="card-button">Explore Code</a>
            </div>
            <div class="card-description">
                <p class="text-title">${api.title}</p>
                <p class="text-body">${api.desc}</p>
            </div>
        </div>
        `;
		document.querySelector('.apiInt-list .swiper-wrapper').append(projectCard);
		projectlistSwiper();
	});
};

fetchAllProjects().then(apiInt);

// Game Projects
const games = async () => {
	const projects = await fetchAllProjects();
	const { games: gameProjects } = projects;

	gameProjects.forEach((game) => {
		const projectCard = document.createElement('div');
		projectCard.classList.add('swiper-slide');
		projectCard.innerHTML = `
        <div class="card">
            <img class="card-image">
            <div>
                <a href="${game.web_url}" class="card-button">Preview Website</a>
                <a href="${game.code_url}" class="card-button">Explore Code</a>
            </div>
            <div class="card-description">
                <p class="text-title">${game.title}</p>
                <p class="text-body">${game.desc}</p>
            </div>
        </div>
        `;
		document.querySelector('.game-list .swiper-wrapper').append(projectCard);
		projectlistSwiper();
	});
};

fetchAllProjects().then(games);

// Design Templates
const design = async () => {
	const projects = await fetchAllProjects();
	const { design: designProjects } = projects;

	designProjects.forEach((design) => {
		const projectCard = document.createElement('div');
		projectCard.classList.add('swiper-slide');
		projectCard.innerHTML = `
        <div class="card">
            <img class="card-image">
            <div>
                <a href="${design.web_url}" class="card-button">Preview Website</a>
                <a href="${design.code_url}" class="card-button">Explore Code</a>
            </div>
            <div class="card-description">
                <p class="text-title">${design.title}</p>
                <p class="text-body">${design.desc}</p>
            </div>
        </div>
        `;
		document.querySelector('.design-list .swiper-wrapper').append(projectCard);
		projectlistSwiper();
	});
};

fetchAllProjects().then(design);


// Project List Swiper
const projectlistSwiper = () => {
	new Swiper('.mySwiper3', {
		slidesPerView: 4,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 2,
			},
			200: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			300: {
				slidesPerView: 2,
				spaceBetween: 8,
			},
			600: {
				slidesPerView: 4,
				spaceBetween: 60,
			},
		},
	});
};

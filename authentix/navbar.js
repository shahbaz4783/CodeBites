document.addEventListener('DOMContentLoaded', function() {

    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navContainer').innerHTML = data;
      });

  });
  
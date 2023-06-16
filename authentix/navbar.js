document.addEventListener('DOMContentLoaded', function() {
    // Load the nav content
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navigation').innerHTML = data;
      });
  
    // Load the footer content
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      });
  });


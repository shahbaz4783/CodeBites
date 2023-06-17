document.addEventListener('DOMContentLoaded', () => {
    fetch('/authentix/views/navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navigation').innerHTML = data;
      });
  
    fetch('/authentix/views/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      });
  });
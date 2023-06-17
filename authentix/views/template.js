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



  const token = localStorage.getItem('token');
  const getJoin = document.querySelector('#join');
  const getProfile = document.querySelector('#profile');
  const getNav = document.querySelector('#navigation');

  if (true) {
    // getJoin.style.display = 'none';
    // getProfile.style.display = 'flex';
    console.log(token.length);
    
    const login = document.createElement('p').innerText = 'LogIn'
    getNav.append(login)
  }


  // document.querySelector('#logout').addEventListener('click', () => {
  //   localStorage.removeItem('token');
  // })
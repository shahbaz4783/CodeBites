const tabs = document.querySelectorAll('.tab');

 function switchTabs(event) {
     const tabId = event.target.dataset.tab;
     tabs.forEach(tab => tab.classList.remove('active'));
     document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

     event.target.classList.add('active');
     document.getElementById(tabId).classList.add('active');

     location.hash = `#${tabId}`;
 }


 tabs.forEach(tab => tab.addEventListener('click', switchTabs));

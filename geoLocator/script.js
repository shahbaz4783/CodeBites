const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([52, 1]).addTo(map);

navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    marker.setLatLng([lat, lng]).update();
    map.setView([lat, lng], 17);

    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
    const data = await response.json();
    
    const city = data.address.city || '';
    const region = data.address.region || '';

    const popupContent = `<strong>Your Current Location</strong> <br> ${city} ${region}`;

    marker.bindPopup(popupContent).openPopup();
});
const api_url = "https://opensky-network.org/api/states/all"

async function getData() {
    const response = await fetch(api_url)
    const data = await response.json()
    //console.log(data.states)
    for (let i = 0; i < 10; i++) {
        console.log("longitude: " + data.states["5"])
        console.log("latitude: " + data.states["6"])
    }
}

getData()

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamhlZnRlciIsImEiOiJjanpkZmdxYmswZnU5M2RxbGcwMmh4dTJwIn0.E2XcfscpDjmEDlsM7FYtTw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);
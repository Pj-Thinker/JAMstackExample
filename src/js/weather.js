
function success(pos) {
    
    const API_KEY = "7945e5293207ac43ab89060c4227391b";

    const url = `api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_key}&units=metric`;
    
    fetch(url)
    .then(response_ => {
        return response.json();
    })
    .then((data) =>{

        document.querySelector('#city').textContent = data.name;
        document.querySelector('#tem').textContent = data.main.temp;
        console.log('data: ', data);
    })
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
  }
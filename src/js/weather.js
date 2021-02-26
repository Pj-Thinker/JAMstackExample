
function success(pos) {

    const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric`;
    
    fetch(url)
    .then(response_ => {
        return response.json();
    })
    .then((data) =>{

        document.querySelector('#city').textContent = data.name;
        document.querySelector('#temp').textContent = data.main.temp;
        console.log('data: ', data);
    })
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
  }
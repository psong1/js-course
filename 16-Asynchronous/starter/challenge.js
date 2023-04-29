const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with Geocode API ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch(err => console.log(err));
};
whereAmI(52.508, 13.381);

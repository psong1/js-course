'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// 

///////////////////////////////////////

const renderCountry = function(data, classname = '') {
    const html = `
    <article class="country ${classname}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
      `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

    
    const getCountryAndNeighbour = function(country) {
        // AJAX call country 1
        const request = new XMLHttpRequest();
        request.open('GET', `https://restcountries.com/v2/name/${country}`);
        request.send();

        request.addEventListener('load', function() {
            const [data] = JSON.parse(this.responseText);
            console.log(data);

        // Render country
        renderCountry(data);

        // Get neighbor country
        const neighbor = data.borders?.[0];


        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
        request2.send();

        request2.addEventListener('load', function() {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, 'neighbour');
        })
    });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');
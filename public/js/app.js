console.log('JS is working');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const formSubmit = document.querySelector('form');
const formInput = document.querySelector('input');
const weatherOutput = document.querySelector('.output1');
const locationOutput = document.querySelector('.output2');

formSubmit.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch(`/weather?address=${formInput.value}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        weatherOutput.innerHTML = data.error;
        locationOutput.innerHTML = '';
      } else {
        weatherOutput.innerHTML = data.location;
        locationOutput.innerHTML = data.forecastData;
      }
    });
  });
});

// scripts.js
const body = document.querySelector('body');
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');
body.appendChild(buttonContainer);
const addGifButton = document.createElement('button');
addGifButton.innerText = 'Add Gif';
const searchInput = document.createElement('input');
searchInput.placeholder = "Search for gifs";
buttonContainer.appendChild(searchInput);
buttonContainer.appendChild(addGifButton);

const addGif = function() {
    let searchString = searchInput.value;

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=YSMGO2xquJiKnc672EWXSuRmN5EvdAoV&s=${searchString}`, {mode: 'cors'})
    .then(function(response) {
        if (!response.ok) {
            throw new Error(`Fetch error. The status is as follows: ${response.status}`)
        }
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        let image = document.createElement('img');
        image.src = response.data.images.fixed_height.url;
        body.appendChild(image);
    })
    .catch(function(error) {
        console.error('Error fetching the gif:', error);
        alert(`Error fetching the gif: ${error.message}`);
    });    
}

addGifButton.addEventListener('click', addGif);
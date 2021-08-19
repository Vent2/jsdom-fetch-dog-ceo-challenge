const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', () => {
    imgAPI();
    breedAPI();
    breedSelector();
})




function imgAPI() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.message.length; i++) {
                let img = document.createElement('img')
                img.src = data.message[i]
                img.style.width = '20rem'
                img.style.height = '20rem'
                img.style.margin = '5px'
                document.getElementById('dog-image-container').appendChild(img)
            }
        })
}

function breedAPI() {
    const breeds = document.getElementById('dog-breeds');
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            Object.keys(data.message).forEach(function (key){
                let breed = document.createElement('li');
                breed.innerText = `${key}: ${data.message[key]}`;
                breeds.appendChild(breed);

                breed.addEventListener('click', () => {
                    breed.style.color = 'orange';
                })
            })
        })
    
}


function breedSelector(){
    const dropdown = document.getElementById('breed-dropdown')

    dropdown.addEventListener('change', (event) =>{
      console.log(event.target.value)
      const breedList = document.getElementsByTagName('li')
      for (li of breedList) {
         let target = li.innerText.charAt(0);
         if (target === event.target.value) {
          li.style.display = 'block';
         } else {
          li.style.display = 'none';
         };
      };
    });
}
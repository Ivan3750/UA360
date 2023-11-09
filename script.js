document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.getElementById("animatedText");
    const words = [" Прогноз погоди", " Щоденні новини", " Цікаві факти", " Активний спорт"];
    let currentWordIndex = 0;
    let currentIndex = 0;
    let isDeleting = false;
  
    function animateText() {
      const currentText = words[currentWordIndex].slice(0, currentIndex);
      animatedText.textContent = currentText;
  
      if (!isDeleting) {
        currentIndex++;
  
        if (currentIndex > words[currentWordIndex].length) {
          isDeleting = true;
          currentIndex = words[currentWordIndex].length - 1;
          setTimeout(animateText, 500); // Пауза перед стиранням
        } else {
          setTimeout(animateText, 100); // Затримка перед наступним символом
        }
      } else {
        currentIndex--;
  
        if (currentIndex === 0) {
          isDeleting = false;
          currentWordIndex = (currentWordIndex + 1) % words.length;
          setTimeout(animateText, 1000); // Пауза перед наступним словом
        } else {
          setTimeout(animateText, 50); // Затримка перед стиранням наступного символу
        }
      }
    }
  
    // Почати анімацію після завантаження сторінки
    setTimeout(function() {
      animatedText.classList.remove("hidden");
      animateText();
    }, 1000);
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.getElementById("iFF");
    const words = [" Щоб передивитися всі відео на YouTube, знадобиться 1000 років.", " Найсильніший м'яз людського тіла – язик.", " Якби до Coca-Cola не додавали барвник, вона була б зеленого кольору.", " Чотирирічна дитина в середньому ставить 400 запитань на день."];
    let currentWordIndex = 0;
    let currentIndex = 0;
    let isDeleting = false;
  
    function animateText() {
      const currentText = words[currentWordIndex].slice(0, currentIndex);
      animatedText.textContent = currentText;
  
      if (!isDeleting) {
        currentIndex++;
  
        if (currentIndex > words[currentWordIndex].length) {
          isDeleting = true;
          currentIndex = words[currentWordIndex].length - 1;
          setTimeout(animateText, 5000); // Пауза перед стиранням
        } else {
          setTimeout(animateText, 100); // Затримка перед наступним символом
        }
      } else {
        currentIndex--;
  
        if (currentIndex === 0) {
          isDeleting = false;
          currentWordIndex = (currentWordIndex + 1) % words.length;
          setTimeout(animateText, 5000); // Пауза перед наступним словом
        } else {
          setTimeout(animateText, 100); // Затримка перед стиранням наступного символу
        }
      }
    }
  
    // Почати анімацію після завантаження сторінки
    setTimeout(function() {
      animatedText.classList.remove("hidden");
      animateText();
    }, 1000);
  });
  

 




/* Map code */
/* 
let countryElements = document.getElementById('countries').childNodes;  
let countryCount = countryElements.length; 
let infoBlock = document.querySelector('.map__info .all__info');  










for (let i = 0; i < countryCount; i++) { 
  let countryElement = countryElements[i]; 
  
  countryElement.onclick = function() { 
    const countryName = this.getAttribute('data-name'); 
    const flagPath = this.getAttribute('data-flag'); 
    
 
 
     
    let h2 = document.querySelector('.svg__map-name');
    h2.textContent = countryName; 
 
     
    let img = document.createElement('img'); 
    img.src = flagPath; 
    img.alt = countryName; 
    getWeatherForCountry(countryName);
     
    const countryTemp = document.querySelector(".temperature-map")
 

    function getWeatherForCopenhagen() {
      const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';
      console.log(countryName)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&appid=${APIKey}`)
          .then(response => response.json())
          .then(data => {
            if (data.cod === 200) {
              const temperature = data.main.temp.toFixed(0);
              countryTemp.textContent = `${temperature}°`; 
    
              const DenmarkImg = document.querySelector("#DenmarkImg")
              switch (data.weather[0].main) {
                case 'Clear':
                    DenmarkImg.src = 'images/clear.png';
                    break;
          
                case 'Rain':
                    DenmarkImg.src = 'images/rain.png';
                    break;
          
                case 'Snow':
                    DenmarkImg.src = 'images/snow.png';
                    break;
          
                case 'Clouds':
                    DenmarkImg.src = 'images/cloud.png';
                    break;
          
                case 'Haze':
                    DenmarkImg.src = 'images/mist.png';
                    break;
          
                default:
                    DenmarkImg.src = '';
            }
            } else {
              temperatureElement.textContent = '-';
            }
          })
          .catch(error => {
            console.error('Помилка запиту до API: ', error);
          });
        }
    
        
      
        
    

 */
   /*  infoBlock.appendChild(h2); 
    infoBlock.appendChild(img);  */
/*   } 
} */



  const flag = document.querySelector(".flag")


  function displayCountryFlag(countryID) {
        flag.onload = function() {
        console.log(`Flag for ${countryID} is loaded`);
    };
    flag.onerror = function() {
        console.error(`Error loading flag for ${countryID}`);
    };

    flag.src = `https://flagsapi.com/${countryID}/flat/64.png`;
    // Встановлюємо src для зображення flag
}

let countryElements = document.getElementById('countries').childNodes;  
let countryCount = countryElements.length; 
let infoBlock = document.querySelector('.map__info .all__info');  


function getWeatherForCountry(countryName) {
  const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';
  const countryTemp = document.querySelector(".temperature-map");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const temperature = data.main.temp.toFixed(0);
        countryTemp.textContent = `${temperature}°`;

        const DenmarkImg = document.querySelector(".status-map")
        switch (data.weather[0].main) {
          case 'Clear':
              DenmarkImg.src = 'img/clear.png';
              break;
    
          case 'Rain':
              DenmarkImg.src = 'img/rain.png';
              break;
    
          case 'Snow':
              DenmarkImg.src = 'img/snow.png';
              break;
    
          case 'Clouds':
              DenmarkImg.src = 'img/cloud.png';
              break;
    
          case 'Haze':
              DenmarkImg.src = 'img/mist.png';
              break;
    
          default:
              DenmarkImg.src = '';
      }
      } else {
        countryTemp.textContent = '-';
      }
    })
    .catch(error => {
      console.error('Помилка запиту до API: ', error);
    });
}


for (let i = 0; i < countryCount; i++) {
  let countryElement = countryElements[i];

  countryElement.onclick = function() {
    const countryName = this.getAttribute('data-name');
    const countryID = this.getAttribute('data-id');
/*     const flagPath = this.getAttribute('data-flag');
 */
    let h2 = document.querySelector('.svg__map-name');
    h2.textContent = countryName;
/* 
    let img = document.createElement('img');
    img.src = flagPath; */
/*     img.alt = countryName;
 */        
    getWeatherForCountry(countryName);
    displayCountryFlag(countryID); // Викликати з правильним параметром countryName
  };
}



/* Map code END */



// Симулюємо завантаження протягом 3 секунд
/* window.addEventListener('load', function() {
  setTimeout(function() {
    // Після завантаження - приховуємо анімацію
    document.querySelector('.loader-wrapper').style.display = 'none';
  }, 3000); // 3000 мс = 3 секунди
}); */


/* document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.loader-wrapper').style.display = 'none';
}); */

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
  }, 600);
})
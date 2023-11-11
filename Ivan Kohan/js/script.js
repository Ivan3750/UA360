  const weatherblock = document.querySelector(".weather-block")
const searchButton = document.querySelector('.button-search');
const inputCity = document.querySelector('.input__city');
const temperatureElement = document.querySelector('.info-temperature');
const InfoCity = document.querySelector('.info-city')



const currentDateElement = document.querySelector('.info-dato');
const wDatoTxtElement = document.querySelector('.w-dato-txt');

// Функція для отримання форматованої поточної дати
function getCurrentDate() {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = new Date().toLocaleDateString('uk-UA', options);
  return currentDate;
}

// Вивід поточної дати при завантаженні сторінки
window.addEventListener('load', () => {
  const currentDate = getCurrentDate();
  currentDateElement.textContent = `${currentDate}`;
  wDatoTxtElement.textContent = `${currentDate}`; // Оновлено текстовий вміст для .w-dato-txt
});








/* 
function getWeatherForDefaultCity() {
  const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=${APIKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const temperature = data.main.temp.toFixed(0);
          temperatureElement.textContent = `${temperature}°C`;
        } else {
          temperatureElement.textContent = '-';
        }
      })
      .catch(error => {
        console.error('Помилка запиту до API: ', error);
      });
    }
    
    getWeatherForDefaultCity(); */


    function getCityFromCoordinates(lat, lon) {
      const APIKey = '224370b4a84e46068c499da7f992fefb'; // Отримайте API-ключ від OpenCage Data
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${APIKey}`;
    
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.results && data.results.length > 0) {
            const city = data.results[0].components.city || data.results[0].components.town;
            console.log(`Користувач знаходиться у місті: ${city}`);
            InfoCity.textContent = `${city}` ;
          } else {
            console.error('Не вдалося отримати інформацію про місто.');
          }
        })
        .catch(error => {
          console.error('Помилка запиту до геокодувального сервісу: ', error);
        });
    }
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getCityFromCoordinates(lat, lon);
      }, function(error) {
        console.error('Помилка отримання місцезнаходження: ', error);
      });
    } else {
      alert("GeoLocation is not supported by your browser");
    }
    

   function getWeatherForDefaultCity() {
      const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';
      
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {      
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          console.log(lat, lon)
          getCityFromCoordinates(lat, lon)
          
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}&lang=uk`)        
            .then(response => response.json())
            .then(data => {
              if (data.cod === 200) {
                const temperature = data.main.temp.toFixed(0);
                temperatureElement.textContent = `${temperature}°C`;
              } else {
                temperatureElement.textContent = '-';
              }
            })
            .catch(error => {
              console.error('Помилка запиту до API: ', error);
            });
        });
      } else {
        alert("GeoLocation is not supported by your browser");
      }
    }
    
    getWeatherForDefaultCity(); 
    
    
    
    
    searchButton.addEventListener('click', () => {
      const city = inputCity.value;
      if (city === '') return;

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const temperature = data.main.temp.toFixed(0);;
          temperatureElement.textContent = `${temperature}°C`;
          weatherblock.style.display = "flex"
        } else {
        temperatureElement.textContent = '-';
      }
    })
    .catch(error => {
      console.error('Помилка запиту до API: ', error);
    });
  });
  
  
  

        
        function displayCity() {
          var city = document.getElementById("cityInput").value;
          document.getElementById("displayedCity").textContent = city;
      }

      
      // Функція для ініціалізації карти після завантаження бібліотеки
      function initMap() {
          // Опції карти та ключ API
          const options = {
              key: 'q2B2WKaw9Usv3LfsV4JIrlUhKXh7uCPd', // Ваш ключ API
              lat: 51.505, // Широта
              lon: -0.09, // Довгота
              zoom: 10, // Масштаб карти
          }; 

          // Створення карти
/*           const map = new WindyMap(options);
 */
          // Вставте код, який дозволяє додавати маркери, шари та інші функції карти тут
      }

      // Викликати функцію initMap після завантаження сторінки
      window.addEventListener('load', initMap);



       const TOKEN = "6688250245:AAG6Xs9pKTnPwF7sPSPq3rvbqlC43Zty0Cg";
		const CHAT_ID = "-1001713512717";
		const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
		const AnswerBox = document.querySelector('.answer-box');
    const FormBox = document.querySelector('.form-box');


 
document.getElementById("form").addEventListener("submit", function (e) { 
  e.preventDefault(); 
  console.log("yes"); 
  AnswerBox.style.display = 'flex';
  FormBox.style.display = 'none'
  let message = "<b>Відгук</b>\n"; 
  message += "<b>Відправник: </b>" + this.name.value + "\n"; 
  message += "<b>Електрона адреса: </b>" + this.email.value + "\n"; 
 message += "<b>Відгук: </b>" + this.feadback.value + "\n";
  const selectedRadio = document.querySelector('input[name="radio"]:checked'); 
  if (selectedRadio) { 
    message += "<b>Оцінка: </b>" + selectedRadio.value + "\n"; 
  } else { 
    message += "<b>Оцінка: </b> Не вибрано\n"; 
  } 
     
  axios.post(URI_API, { 
    chat_id: CHAT_ID, 
    parse_mode: "html", 
    text: message 
  }); 
});


function FeadbackAgain(){

  AnswerBox.style.display = 'none';
  FormBox.style.display = 'block';
}

document.getElementById("form").addEventListener("submit", function (event) {
  // Запобігання стандартної поведінки відправки форми
  event.preventDefault();

  // Очищення форми
  this.reset();
});








/* const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';
     const container = document.querySelector('.container');
const search = document.querySelector('.button-search');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
 
search.addEventListener('click', () => {

  
    const city = document.querySelector('.input__city').value;

    if (city === '')
        return;
        const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';
        

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}&lang=uk`) 
    
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {

                container.style.height = '400px';

                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';

                error404.style.display = 'block';
                error404.classList.add('fadeIn');

                return;

            }

              error404.style.display = 'none';
            error404.classList.remove('fadeIn');  

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-temperature');
            const description = document.querySelector('.weather-status-txt');
            const humidity = document.querySelector('.w-info-txt');
            const wind = document.querySelector('.weather-details .wind span');
            const pressure = document.querySelector('.pressure');
            const visibility = document.querySelector('.visibility');
            const feellike = document.querySelector('.feellike');
       /*      const sunrise = document.querySelector('.sun-time');
            const sunset = document.querySelector('.moon-time'); */
/*             const unixTimesRiseUTC = `${parseInt(json.sys.sunset)}`
            const windSpeed = document.querySelector(`.speed`)
            const windDeg = document.querySelector(`.deg`)
            const windGust = document.querySelector(`.gust`)


            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'images/rain.png';
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'images/mist.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            pressure.innerHTML = `${json.main.pressure}hPA`;
           visibility.innerHTML = `${json.visibility}м`;
            feellike.innerHTML = `${parseInt(json.main.feels_like)}<span>°</span>`;
             sunrise.innerHTML = `${parseInt(json.sys.sunrise)}`;
            sunset.innerHTML = `${parseInt(json.sys.sunset)}`;
            windSpeed.innerHTML = `${parseInt(json.wind.speed)}<span class ="windSpeedtext">м/с</span>`; 
            windDeg.innerHTML = `${parseInt(json.wind.deg)}<span>°</span>`;
            windGust.innerHTML = `${parseInt(json.wind.gust)}<span class ="windSpeedtext">м/с</span>`;
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');

            container.style.height = '590px';

          });
          
        }); */

        const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';
        const container = document.querySelector('.container');
        const search = document.querySelector('.button-search');
        const findMyButton = document.querySelector('.FindMy_btn'); // Додано посилання на кнопку FindMyButton
        const weatherBox = document.querySelector('.weather-box');
        const weatherDetails = document.querySelector('.weather-details');
        const error404 = document.querySelector('.not-found');
        
        search.addEventListener('click', searchByCity);
        findMyButton.addEventListener('click', searchByLocation); // Додано обробник подій для кнопки FindMyButton
        
         function searchByCity() {
          const city = document.querySelector('.input__city').value;
          if (city === '') return;
          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
          .catch(handleError);
        } 


        function UA() {          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=kyiv&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
        }

        function DK() {          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=copenhagen&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
        }
        function PL() {          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=warsawa&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
        }
        function BA() {          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=sarajevo&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
        }
        function IS() {          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=jerusalem&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
        }
        function DE() {          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
        }
        function FR() {          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
        }
        function IT() {          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=rom&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
        }
        function NR() {          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=oslo&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
        }
        function IR() {          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=dublin&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
        }
        function SE() {          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
        }
        function SP() {          
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=madrid&units=metric&appid=${APIKey}&lang=uk`)
          .then(response => response.json())
          .then(handleWeatherData)
        }





        const loctext = document.querySelector(".w-location-txt")




























         function searchByLocation() {  
          if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function(position) {      
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}&lang=uk`)        
            .then(response => response.json())
              .then(handleWeatherData)        .catch(handleError);
          }, function(error) {      console.error("Помилка геолокації: " + error.message);
            handleError(error);    });
        } else {    
          alert("Геолокація не підтримується в цьому браузері.");
        }} 
       /*  function searchByLocation() {
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
        
              fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}&lang=uk`)
                .then(response => response.json())
                .then(handleWeatherData)
                .catch(handleError);
            });
          } else {
            alert("Геолокація не підтримується в цьому браузері.");
          }
        } */
        
        
        function handleWeatherData(json) {
          if (json.cod === '404') {
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
          } else {
          
            console.log("hello");
            console.log(json);
            weatherblock.style.display = "flex"
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-temperature');
            const description = document.querySelector('.weather-status-txt');
            const humidity = document.querySelector('.w-info-txt');
            const wind = document.querySelector('.weather-details .wind span');
            const pressure = document.querySelector('.pressure');
            const visibility = document.querySelector('.visibility');
            const feellike = document.querySelector('.feellike');
            const sunrise = document.querySelector('.sun-time')
            const sunset = document.querySelector('.moon-time')
            const windSpeed = document.querySelector(`.speed`)
            const windDeg = document.querySelector(`.deg`)
            const windGust = document.querySelector(`.gust`)
            
            
            switch (json.weather[0].main) {
                    case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                    case 'Rain':
                    image.src = 'images/rain.png';
                    break;

                    case 'Snow':
                    image.src = 'images/snow.png';
                    break;

                    case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;

                    case 'Haze':
                    image.src = 'images/mist.png';
                    break;

                    default:
                      image.src = '';
                    }
                        

              

const unixTimesRise =`${json.sys.sunrise}`; // Приклад Unix timestamp
const unixTimeSet = `${json.sys.sunset}` ;

// Створення об'єкту Date на основі Unix timestamp
const sunriseTime = new Date(unixTimesRise * 1000);
const sunsetTime = new Date(unixTimeSet * 1000);

// Отримання годин, хвилин та секунд
const Risehours = sunriseTime.getHours();
const Riseminutes = "0" + sunriseTime.getMinutes();
const Sethours = sunsetTime.getHours();
const Setminutes = "0" + sunsetTime.getMinutes();

// Форматування часу
const formattedTimeRise = Risehours + ':' + Riseminutes.substr(-2);
const formattedTimeSet = Sethours + ':' + Setminutes.substr(-2);

// Встановлення значення у вашому елементі
sunrise.textContent = formattedTimeRise;
sunset.textContent = formattedTimeSet;






if (windGust < 0){
  windGust.innerHTML = `${parseInt(json.wind.gust)}<span class ="windSpeedtext">м/с</span>`;
  console.log(good)
}else{
  windGust.innerHTML = `0<span class ="windSpeedtext">м/с</span>`;
}


          loctext.innerHTML = `${json.name}`;
          temperature.innerHTML = `${parseInt(json.main.temp)}<span>°</span>`;
          description.innerHTML = `${json.weather[0].description}`;
          humidity.innerHTML = `${json.main.humidity}%`;
          pressure.innerHTML = `${json.main.pressure}hPA`;
          visibility.innerHTML = `${json.visibility}м`;
          feellike.innerHTML = `${parseInt(json.main.feels_like)}<span>°</span>`;
          /* sunrise.innerHTML = `${parseInt(json.sys.sunrise)}`;
          sunset.innerHTML = `${parseInt(json.sys.sunset)}`; */
          windSpeed.innerHTML = `${parseInt(json.wind.speed)}<span class ="windSpeedtext">м/с</span>`; 
          windDeg.innerHTML = `${parseInt(json.wind.deg)}<span>°</span>`;
/*           windGust.innerHTML = `${parseInt(json.wind.gust)}<span class ="windSpeedtext">м/с</span>`;
 */         /*    weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');

            container.style.height = '590px'; */

          }
          
          
        
        function handleError(error) {
          console.error("Помилка при запиті до OpenWeather API:", error);
        }
        
        
        
        
        
        
        
        
        
/* MAIN END */

 const FindMyButton = document.querySelector(`.FindMy_btn`) 

FindMyButton.addEventListener('click', () => {

navigator.geolocation.getCurrentPosition(function(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat)
  console.log(lon)
  console.log(APIKey)
});  
});
}






/* JS CODE FOR MORE FUNCTION */

/* function changeClass() {
    const box = document.getElementById("box");
    if (box.classList.contains("show")) {
        box.classList.remove("show");
    } else {
        box.classList.add("show");
    }
}
 */










/* Bosnia */





const Tbosnia = document.querySelector("#Bosnia")

function getWeatherForSarajevo() {
  const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=sarajevo&units=metric&appid=${APIKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const temperature = data.main.temp.toFixed(0);
          Tbosnia.textContent = `${temperature}°`;

          const BosniaImg = document.querySelector("#BosniaImg")
          switch (data.weather[0].main) {
            case 'Clear':
                BosniaImg.src = 'images/clear.png';
                break;
      
            case 'Rain':
                BosniaImg.src = 'images/rain.png';
                break;
      
            case 'Snow':
                BosniaImg.src = 'images/snow.png';
                break;
      
            case 'Clouds':
                BosniaImg.src = 'images/cloud.png';
                break;
      
            case 'Haze':
                BosniaImg.src = 'images/mist.png';
                break;
      
            default:
                BosniaImg.src = '';
        }
        } else {
          temperatureElement.textContent = '-';
        }
      })
      .catch(error => {
        console.error('Помилка запиту до API: ', error);
      });
    }

    
    getWeatherForSarajevo();
    

/* END */


/* UKRAINE */



const Tukraine = document.querySelector("#UKR")

function getWeatherForKyiv() {
  const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=kyiv&units=metric&appid=${APIKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const temperature = data.main.temp.toFixed(0);
          Tukraine.textContent = `${temperature}°`;

          const UkraineImg = document.querySelector("#UkraineImg")
          switch (data.weather[0].main) {
            case 'Clear':
                UkraineImg.src = 'images/clear.png';
                break;
      
            case 'Rain':
                UkraineImg.src = 'images/rain.png';
                break;
      
            case 'Snow':
                UkraineImg.src = 'images/snow.png';
                break;
      
            case 'Clouds':
                UkraineImg.src = 'images/cloud.png';
                break;
      
            case 'Haze':
                UkraineImg.src = 'images/mist.png';
                break;
      
            default:
                UkraineImg.src = '';
        }
        } else {
          temperatureElement.textContent = '-';
        }
      })
      .catch(error => {
        console.error('Помилка запиту до API: ', error);
      });
    }

    
    getWeatherForKyiv();
/* END */


/* DANMARK */

const Tdenmark = document.querySelector("#Denmark")


function getWeatherForCopenhagen() {
  const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=copenhagen&units=metric&appid=${APIKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const temperature = data.main.temp.toFixed(0);
          Tdenmark.textContent = `${temperature}°`; 

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

    
    getWeatherForCopenhagen();
    

/* END */












/* 

function getWeatherForCopenhagen() {
  const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=copenhagen&units=metric&appid=${APIKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const temperature = data.main.temp.toFixed(0);
          Tdenmark.textContent = `${temperature}°`;
          Namecountry = ´${}´ 

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

    
    getWeatherForCopenhagen();
 */


    /*  */




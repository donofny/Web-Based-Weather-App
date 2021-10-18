class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "New York";
    this.isValidInput;
  }

  populateUI(data) {
    //de-structure vars
    //add them to inner HTML
    try{
    this.uiContainer.innerHTML = `
        
      <div class="card mx-auto mt-5" style="width: 18rem;">
        <div class="card-body justify-content-center">
          <h5 class="card-title"><b>${data.name}</b></h5>
          <h6 class="card-subtitle mb-2 text-muted">Current Temperature: ${((data.main.temp-273.15) * 9/5 +32).toFixed(2)}°F</h6>
          <h6 class="card-subtitle mb-2 text-muted">Real Feel: ${((data.main.feels_like-273.15) * 9/5 +32).toFixed(2)}°F</h6>
          <h6 class="card-subtitle mb-2 text-muted">Todays High: ${((data.main.temp_max-273.15) * 9/5 +32).toFixed(2)}°F <br/>Todays Low: ${((data.main.temp_min-273.15) * 9/5 +32).toFixed(2)}°F</h6>
          <h6 class="card-subtitle mb-2 text-muted">Humidity: ${data.main.humidity}%</h6>
          <h6 class="card-subtitle mb-2 text-muted">Wind speed: ${data.wind.speed}MPH</h6>
          <h6 class="card-subtitle mb-2 text-muted">Forecast: ${data.weather[0].description}</h6> 
          <img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Image failed to load"/>
        </div>
      </div>
        
    `;
    this.isValidInput = true;
    }

    catch(err){
      this.isValidInput = false;
      this.uiContainer.innerHTML = `
        
      <div class="card mx-auto mt-5" style="width: 30rem;">
        <div class="card-body justify-content-center">
          <h6 style="text-align:center" class="text-muted"> <b>Invalid Input, try a Zip Code for more accurate results.</b></h6>
        </div>
      </div>
      `;
    }
  }
  
  populateDefaultUI(data){
    this.uiContainer.innerHTML = `
      <div class="card mx-auto mt-5" style="width: 18rem;">
        <div class="card-body justify-content-center">
          <h6 class="card-subtitle mb-2 text-muted"><b>Default Location:</b></h6>
          <h5 class="card-title"><b>${data.name}</b></h5>
          <h6 class="card-subtitle mb-2 text-muted">Current Temperature: ${((data.main.temp-273.15) * 9/5 +32).toFixed(2)}°F</h6>
          <h6 class="card-subtitle mb-2 text-muted">Real Feel: ${((data.main.feels_like-273.15) * 9/5 +32).toFixed(2)}°F</h6>
          <h6 class="card-subtitle mb-2 text-muted">Todays High: ${((data.main.temp_max-273.15) * 9/5 +32).toFixed(2)}°F <br/>Todays Low: ${((data.main.temp_min-273.15) * 9/5 +32).toFixed(2)}°F</h6>
          <h6 class="card-subtitle mb-2 text-muted">Humidity: ${data.main.humidity}%</h6>
          <h6 class="card-subtitle mb-2 text-muted">Wind speed: ${data.wind.speed}MPH</h6>
          <h6 class="card-subtitle mb-2 text-muted">Forecast: ${data.weather[0].description}</h6> 
          <img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Image failed to load"/>
        </div>
      </div>  
    `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    if(this.isValidInput == true){localStorage.setItem("city", JSON.stringify(data));}
    else{localStorage.setItem("city", JSON.stringify(this.defaultCity));}
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
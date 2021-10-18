class Fetch {
  async getCurrent(input) {
    const myKey = "7c24c8a33c60cb7ea3a35644d22ed41a";
    const defaultCity = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=7c24c8a33c60cb7ea3a35644d22ed41a";

    try{
    //make request to url
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();
    return data;
    //console.log(data);
    }
    //default location to display
    catch(err){
      const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=7c24c8a33c60cb7ea3a35644d22ed41a`
    );

    const data = await response.json();
    return data;
    }
    
  }
  async getCurrentDefault() {
    //const myKey = "7c24c8a33c60cb7ea3a35644d22ed41a";
    //const defaultCity = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=7c24c8a33c60cb7ea3a35644d22ed41a";

    //default location to display
      const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=7c24c8a33c60cb7ea3a35644d22ed41a`
    );

    const data = await response.json();
    return data;
    
  }
}
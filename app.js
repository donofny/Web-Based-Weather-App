//inst classes//

const ft = new Fetch();
const ui = new UI();

//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    //call a UI method
    ui.populateUI(data);
    console.log(data);
    //call saveToLS
    if(data.cod == 200){ui.saveToLS(data);}
    else{ui.saveToLS(ui.city);}
  });
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {

  ft.getCurrentDefault().then((data) => {
    ui.populateUI(data);
  });
  /*
  try{
  const dataSaved = ui.getFromLS();
  console.log(dataSaved);
  if(dataSaved == "New York"){
  	ft.getCurrent(dataSaved).then((data) => {
    	ui.populateDefaultUI(data);
	});
  }
  else{ui.populateUI(dataSaved);}
  }
  catch(err){console.log("Something went wrong" + err);}
  */
});
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weather = {};
const KELVIN = 273;
const key = "1b152361152c051cc620c8175f00ef1e";
var latitu;
var longi;
weather.temperature = {
    unit : "celsius"
}

// if('geolocation' in navigator){
//     navigator.geolocation.getCurrentPosition(setPosition, showError);
// }else{
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
// }

// function setPosition(position){
//     let latitude = latitu;
//     let longitude = longi;
//
// }

  
//ERROR
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}


//I have called the getWeather from the firebase colling
//WEATHER API
function getWeather(lat,lon){
  latitu=lat;
  longi=lon;
 let api =`https://api.openweathermap.org/data/2.5/weather?lat=${latitu}&lon=${longi}&appid=${key}`;
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;

    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);

        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});




//newsapi
console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = 'e996418be65e4013b1f7f3b51a568ebe'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index)
            let news = `<div class="card">
            <div class="card-header" style="padding: 1.5%;" id="heading${index}">
            <h2 class="mb-0">
            <p class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
            aria-expanded="false" aria-controls="collapse${index}">
            ${element["title"]}
            <a style="font-size:12px; color:white;" href="${element['url']}" target="_blank" >Read article</a> 
            </p>
            </h2>
            </div>
            <div class="card-body"> </div>
        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
// console.log(pageSize);
xhr.send()


//description
//<div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
{/* <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
</div>
</div> */}
//class mb-0 for index news
{/* <b>Breaking News ${index+1}:</b>  */}



function calculate(){
    //Need to determine the constant of some id functions.
      var bmi;
      var result = document.getElementById("result");
    //The value of the height slider
      var height = parseInt(document.getElementById("height").value);
    //The value of the weight slider
      var weight = parseInt(document.getElementById("weight").value);
    
    //The value of height and width should be displayed in the webpage using "textContent".
      document.getElementById("weight-val").textContent = weight + " kg";
      document.getElementById("height-val").textContent = height + " cm";
    
  //Now I have added the formula for calculating BMI in "bmi"
      bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    //With the help of "textContent" we have arranged to display in the result page of BMI
      result.textContent = bmi;
  
    
    //Now we have to make arrangements to show the text
    
    
    //When the BMI is less than 18.5, you can see the text below
      if(bmi < 18.5){
          category = "Underweight 😒";
          result.style.color = "#ffc44d";
      }
    
    //If BMI is >=18.5 and <=24.9
      else if( bmi >= 18.5 && bmi <= 24.9 ){
          category = "Normal Weight 😍";
          result.style.color = "#0be881";
      }
    
    //If BMI is >= 25 and <= 29.9 
      else if( bmi >= 25 && bmi <= 29.9 ){
          category = "Overweight 😮";
          result.style.color = "#ff884d";
      }
    
    //If BMI is <= 30
      else{
          category = "Obese 😱";
          result.style.color = "#ff5e57";
      }
    //All of the above text is stored in "category".
  
  //Now you have to make arrangements to display the information in the webpage with the help of "textContent"
      document.getElementById("category").textContent = category;
  }



  //todojs
  var storeToDos = [];
  // Cache DOM
  var addToDo = document.getElementById('add-to-do');
  var taskHolder = document.getElementById('task-holder');
  var uncompleteTasks = document.getElementById('uncompleted-tasks');
  var completedTasks = document.getElementById('completed-tasks');
  // Bind events
  var bindEvents = function(listItem, checkboxEventHandler) {
    // Delete
    var deleteToDo = listItem.querySelector('.delete-to-do');
    deleteToDo.addEventListener('click', deleteTask);
    // Edit
    listItem.querySelector('.edit-to-do').addEventListener('click', editTask);
    listItem.querySelector('.edit-holder').addEventListener('keyup', editTaskEnter);
    // Checkbox
    var checkbox = listItem.querySelector('input.edit-to-do');
    checkbox.onchange = checkboxEventHandler;
  }
  // Create list item
  var createListItem = function() {
    var listItem = document.createElement('li');
    var deleteToDo = document.createElement('div');
    deleteToDo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M7.1 7.1l9.8 9.8M7.1 16.9l9.8-9.8"/></svg>';
    deleteToDo.classList.add('delete-to-do');
    var editToDo = document.createElement('div');
    editToDo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M16 3l5 5L8 21H3v-5z"/></svg>';
    editToDo.classList.add('edit-to-do');
    var toDoStatus = document.createElement('input');
    toDoStatus.type = 'checkbox';
    toDoStatus.classList.add('edit-to-do');
    var editHolder = document.createElement('input');
    editHolder.type = 'text';
    editHolder.classList.add('edit-holder');
    listItem.appendChild(deleteToDo);
    listItem.appendChild(editToDo);
    listItem.appendChild(toDoStatus);
    listItem.appendChild(editHolder);
    return listItem;
  }
  // Add task
  var addTask = function(e) {
    var listItem = createListItem();
    var taskHolderValue = taskHolder.value;
    if (taskHolderValue) {
      var taskHolderElement = document.createElement('label');
      taskHolderElement.classList.add('to-do-item');
      listItem.insertBefore(taskHolderElement, listItem.childNodes[0]);
      var storeToDosObj = {
        value: '',
        id: null,
        completed: false
      }
      storeToDosObj.value = taskHolderValue;
      var listId = storeToDosObj.id = Date.now();
      listItem.id = listId;
      uncompleteTasks.insertBefore(listItem, uncompleteTasks.childNodes[0]);
      var storedToDos = localStorage.getItem('todos');
      if (storedToDos) {
        var storedToDosArr = JSON.parse(localStorage.todos);
        storedToDosArr.push(storeToDosObj);
        localStorage.setItem('todos', JSON.stringify(storedToDosArr));
      } else {
        console.log(storeToDos);
        storeToDos.push(storeToDosObj);
        localStorage.setItem('todos', JSON.stringify(storeToDos));
      }
      taskHolderElement.innerHTML = taskHolderValue;
      bindEvents(listItem, taskCompleted);
      taskHolder.value = '';
    } else {
      console.log("You didn't add a to a to do!");
    }
  }
  var addTaskEnter = function(e) {
    var key = 'which' in e ? e.which : e.keyCode;
    if (key === 13) {
      addTask();
    }
  }
  // Delete task
  var deleteTask = function() {
    var listItem = this.parentNode;
    var parentItem = listItem.parentNode;
    var getToDos = JSON.parse(localStorage.getItem('todos'));
    for (var b = 0; b < getToDos.length; b++) {
      if (getToDos[b].id == listItem.id) {
        getToDos.splice(b, 1);
        localStorage.setItem('todos', JSON.stringify(getToDos));
      }
    }
    parentItem.removeChild(listItem);
  }
  // Edit task
  var editTask = function() {
    var defaultValue = this.parentNode.querySelector('label').innerHTML;
    var listItem = this.parentNode;
    var listParent = this.parentNode;
    var editedValue = listParent.querySelector('input.edit-holder').value;
    if (listItem.classList.contains('editing') && editedValue) {
      listParent.querySelector('label').innerHTML = editedValue;
      var storedLocalStorage = JSON.parse(localStorage.todos);
      for (var d = 0; d < storedLocalStorage.length; d++) {
        if (storedLocalStorage[d].id == listItem.id) {
          storedLocalStorage[d].value = editedValue;
          localStorage.setItem('todos', JSON.stringify(storedLocalStorage));
        }
      }
    }
    listItem.classList.toggle('editing');
    listParent.querySelector('input.edit-holder').value = '';
  }
  // Edit task enter
  var editTaskEnter = function(e) {
    var key = 'which' in e ? e.which : e.keyCode;
    if (key === 13) {
      editTask.call(this);
    }
  }
  // Task completed
  var taskCompleted = function() {
    var listItem = this.parentNode;
    var storedCompletion = JSON.parse(localStorage.getItem('todos'));
    if (storedCompletion) {
      if (listItem.classList.contains('editing')) {
      }
      for (var e = 0; e < storedCompletion.length; e++) {
        if (storedCompletion[e].id == listItem.id) {
          if (storedCompletion[e].completed === true) {
            this.parentNode.classList.add('completed');
            uncompleteTasks.insertBefore(listItem, uncompleteTasks.childNodes[0]);
            this.parentNode.classList.remove('completed');
            bindEvents(listItem, taskCompleted);
            storedCompletion[e].completed = false;
          } else {
            completedTasks.insertBefore(listItem, completedTasks.childNodes[0]);
            this.parentNode.classList.add('completed');
            bindEvents(listItem, taskUncompleted);
            storedCompletion[e].completed = true;
          }
          localStorage.setItem('todos', JSON.stringify(storedCompletion));
        }
      }
    }
  }
  // Task uncompleted
  var taskUncompleted = function() {
    var listItem = this.parentNode;
    uncompleteTasks.insertBefore(listItem, uncompleteTasks.childNodes[0]);
    this.parentNode.classList.remove('completed');
    bindEvents(listItem, taskCompleted);
    if (localStorage) {
      var storedCompletion = JSON.parse(localStorage.getItem('todos'));
    }
    for (var f = 0; f < storedCompletion.length; f++) {
      if (storedCompletion[f].id == listItem.id) {
        storedCompletion[f].completed = false;
        localStorage.setItem('todos', JSON.stringify(storedCompletion));
      }
    }
  }
  // Add task
  addToDo.addEventListener("click", addTask);
  taskHolder.addEventListener("keyup", addTaskEnter);
  // Loop over complete tasks
  for (i = 0; i < completedTasks.length; i++) {
    var listItem = completedTasks[i];
    uncompleteTasks.appendChild(listItem);
    bindEvents(listItem, completedTasks);
  }
  // Render local storage
  var getToDos = JSON.parse(localStorage.getItem('todos'));
  console.log(getToDos);
  if (getToDos) {
    for (i = 0; i < getToDos.length; i++) {
      var listItem = createListItem();
      listItem.id = getToDos[i].id;
      var storedListItem = document.createElement('label');
      storedListItem.innerHTML = getToDos[i].value;
      listItem.insertBefore(storedListItem, listItem.childNodes[0]);
      if (getToDos[i].completed === true) {
        listItem.querySelector('input').checked = true;
        completedTasks.appendChild(listItem);
        listItem.classList.add('completed');
      } else {
        uncompleteTasks.appendChild(listItem);
      }
      bindEvents(listItem, taskCompleted)
    }
  }

  //hide unhide

  function unhidetodolist(){
    document.getElementById("id2").style.display = "block";
}
function hidetodolist(){
    document.getElementById("id2").style.display = "none";
}

function unhide(){
    document.getElementById("BMI").style.display = "block";
}
function hide(){
    document.getElementById("BMI").style.display = "none";
}

window.onload = function(){
    document.getElementById("BMI").style.display = "none";
    document.getElementById("id2").style.display = "none";
    document.getElementById("id4").style.display = "none";
}
function unhidescore(){
    document.getElementById("id4").style.display = "block";
}
function hidescore(){
    document.getElementById("id4").style.display = "none";
}
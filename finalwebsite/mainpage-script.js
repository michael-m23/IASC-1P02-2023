function discover(){
  document.getElementById("sub_title").innerHTML = "What are you looking for?";
  document.getElementById("search_bar").placeholder = "Discover everything you need for your dream vacation...";
}

function hotels(){
  document.getElementById("sub_title").innerHTML = "Stay somewhere cozy...";
  document.getElementById("search_bar").placeholder = "Search for a clean, and cozy place to stay...";
}

function restaurants(){
  document.getElementById("sub_title").innerHTML = "Find a great place for breakfast, lunch and dinner";
  document.getElementById("search_bar").placeholder = "Search for local restaurants, mealplans, and more...";
}

function what_to_do(){
  document.getElementById("sub_title").innerHTML = "Do something enjoyable and memorable...";
  document.getElementById("search_bar").placeholder = "Search for fun and enjoyable things to do...";
}

function rentals(){
  document.getElementById("sub_title").innerHTML = "Find somewhere to rent...";
  document.getElementById("search_bar").placeholder = "Search places to stay, airbnb...";
}

function clear_search(){
  document.getElementById("search_bar").value = "";
}

// This function just makes sure that all required fields have some sort of user input
// Exectued when user presses "Submit Form" button
function getForm(){
  var valid = true;
  var name_fields = document.getElementsByClassName("name_required");
  var email = document.getElementById("email");
  var province = document.getElementById("province");
  var country = document.getElementById("countries");

  for(let i = 0; i < name_fields.length; i++){
    if(name_fields[i].value == ""){
      valid = false;
    }
  }

  if(email.value == "" || province.value == ""){
    valid = false;
  }

  if(country.value == "select"){
    valid = false;
  }

  if(! valid){
    alert("Please fill all required fields.");
    console.log("invalid");
  }
  else{
    reset();
    alert("You have successfully signed in. Thank you for choosing Travel Agency!");
  }
}

// This function resets all of the input and drop down menu fields
function reset(){
  var name_fields = document.getElementsByClassName("name_required");
  var optional_fields = document.getElementsByClassName("name_optional");
  var email = document.getElementById("email");
  var province = document.getElementById("province");
  var country = document.getElementById("countries");

  for(let i = 0; i < name_fields.length; i++){
    name_fields[i].value = "";
  }

  for(let v = 0; v < optional_fields.length; v++){
    optional_fields[v].value = "";
  }

  email.value = "";
  province.value = "";
  country.value = "select";
}

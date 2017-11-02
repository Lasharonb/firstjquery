document.getElementById("myH1").innerHTML = "Hi!";

$("#myH1").html("Hi Jquery! ");
console.log($(".hiYou").html("Hi You"));


///BASIC AJAX

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log("Plain Javascript: ");
      console.log(this.response);
    }
  };
  xhttp.open("GET", "https://assets.breatheco.de/json/project_list.php", true);
  xhttp.send();


///JQUERY Ajax

$.ajax({
    method: "GET",
    url: "https://assets.breatheco.de/json/project_list.php",
    data: {name:"John", age: "30"}

})
        .done(function(msg){
            //alert("Jquery: " + msg);
            console.log("JQUERY: ");
            console.log(msg);
        });
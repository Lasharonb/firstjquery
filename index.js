//document.getElementById("myH1").innerHTML = "Hi!";

//$("#myH1").html("Hi Jquery! ");
//console.log($(".hiYou").html("Hi You"));

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

///json

document.getElementById("loadbutton").addEventListener("click", ajaxcall);

function ajaxcall(){
   
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "https://assets.breatheco.de/json/project_list.php", true);
    ajax.addEventListener("load", ajaxArrives);
    ajax.send();
    

}

function ajaxArrives(event){
    
    var cardContent ='<div class="card" style="width: 20rem;">' +
          '<img class="card-img-top" src="%img%" alt="Card image cap">' +
          '<div class="card-body">'+
            '<h4 class="card-title">%title%</h4>'+
            '<p class="card-text">%desc%</p>'+
          '</div>'+
        '</div>';
    
         
    
    var jsonObj = JSON.parse(event.target.response);
       
      var text ="";
      var wholeContent = "";
        
        for (var i = 0 ; i <jsonObj.length; i++) {
            
            text = cardContent.replace("%img%", jsonObj[i].thumb);
            text = text.replace("%title%", jsonObj[i].name);
            text = text.replace("%desc%", jsonObj[i].description);
            wholeContent += text;
           
            
        }
    
    
 
  document.getElementById("wholeContent").innerHTML=wholeContent;
  
}


//jquery conversion

document.getElementById("loadbutton").addEventListener("click", ajaxcall);

function ajaxcall(){
   
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "https://assets.breatheco.de/json/project_list.php", true);
    ajax.addEventListener("load", ajaxArrives);
    ajax.send();
    

}

function ajaxArrives(event){
    
    var cardContent ='<div class="card" style="width: 20rem;">' +
          '<img class="card-img-top" src="%img%" alt="Card image cap">' +
          '<div class="card-body">'+
            '<h4 class="card-title">%title%</h4>'+
            '<p class="card-text">%desc%</p>'+
          '</div>'+
        '</div>';
    
         
    
    var jsonObj = JSON.parse(event.target.response);
       
      var text ="";
      var wholeContent = "";
        
        for (var i = 0 ; i <jsonObj.length; i++) {
            
            text = cardContent.replace("%img%", jsonObj[i].thumb);
            text = text.replace("%title%", jsonObj[i].name);
            text = text.replace("%desc%", jsonObj[i].description);
            wholeContent += text;
           
            
        }
    
    
 
  document.getElementById("wholeContent").innerHTML=wholeContent;
  
}


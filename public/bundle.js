/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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



/***/ })
/******/ ]);
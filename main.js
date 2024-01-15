document.querySelector(".registerForm");
var selectForm  = document.querySelector(".registerForm");
selectForm.onsubmit = function(e) {
  e.preventDefault();

var elements= e.target.elements; 
 console.log(elements);
var curency =  {
    enteredamount : elements[0].value,
    curencyType : elements[1].value , 
    ff: elements[2].value , 
};
if ( curency.curencyType == "dollar") {
   var result = document.querySelector(".result");
   result.textContent= parseFloat(curency.enteredamount)*0.27;
   console.log (result); 

}else if (curency.curencyType == "dinar"){
  var result = document.querySelector(".result");
  result.textContent= parseFloat(curency.enteredamount)*0.19;
  console.log (result); 

} else {
  var result = document.querySelector(".result");
  result.textContent= parseFloat(curency.enteredamount);
  console.log (result); 

}

}



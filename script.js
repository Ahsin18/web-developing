function res() 
{
   var nam = document.getElementById("name").value;
   var SRN = document.getElementById("SRN").value;
   var pass = 100 * Math.random();
   var res = document.getElementById("result").value;
  alert("has passed with"+pass.toFixed(2));
  
 
  var resultmessage;

  if(result >=0 && result <= 35) {
   resultmessage = nam+ "has failed with" + result + "result.";
  } else if (result > 35 && result <= 60) {
   resultmessage = nam + "Passed with" + result + "result.";
  }else if (result > 60 && result <= 80) {
   resultmessage = nam + "Passed with" + result + "result.";
  }else if (result > 80 && result <= 100) {
   resultmessage = nam + "Passed with" + result + "result.";

  }

  res.innerHTML = resultmessage;
}
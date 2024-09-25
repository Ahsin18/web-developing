$(document).ready(function() {
    $("#submitButton").click(function() {
      var name = $("#nameInput").val().trim();
      if (name !== "") {
        $("#message").text("April Fool, " + name + "!");
        $("#result").fadeIn();
      } else {
        alert("Please enter your name.");
      }
    });
  });
$(document).ready(function(){

 $("#justin").on("click", function() {
  $("#baby").toggle("hidden");
  var counter = parseInt($("#baby").find("#view-counter").text())
  counter++
  ("#baby").find("#view-counter").text(counter)
 })
})

$(document).ready(function(){

 $("#justin").on("click", function() {
  $("#baby").toggle("hidden");
  var counter = parseInt($("#baby").find("#view-counter").text())
//find my #view-couter within the specified song
  counter++
  ("#baby").find("#view-counter").text(counter)
// grab the number of views - the text of that counter
//increment that counter
// the incremented count should replace the old text
 })
})

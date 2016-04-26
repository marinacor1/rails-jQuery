$(document).ready(function(){

 $("#justin").on("click", function() {
  $("#baby").toggleClass("hidden");
  var counter = parseInt($("#baby").find("#view-counter").text())
  counter++
  $("#baby").find("#view-counter").text(counter)
 })

  $("#selena").on("click", function() {
    $("#come-and-get-it").toggleClass("hidden");
    var counter = parseInt($("#come-and-get-it").find("#view-counter").text())
    counter ++
    $("#come-and-get-it").find("#view-counter").text(counter)
  })

  $("#miley").on("click", function(){
    $("")
  })
})

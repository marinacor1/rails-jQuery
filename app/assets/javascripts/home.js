$(document).ready(function(){

  toggleSong("#justin", "#baby")
  toggleSong("#miley", "#wrecking-ball")
  toggleSong("#selena", "#come-and-get-it")

  function toggleSong(artistID, songID){
    $(artistID).on("click", function() {
      $(songID).toggleClass("hidden");
      // var counter = parseInt($(songID).find("#view-counter").text())
      // counter ++
      // $(songID).find("#view-counter").text(counter)
    })
  }

  $("#colorize").on("click", function(){
    $("#baby").css({'color': 'green'})
  });

  $("#colorize").click(function(){
    $("#wrecking-ball").css({'color': 'blue'})
  });

  $("#colorize").click(function(){
    $("#come-and-get-it").css({'color': 'purple'})
  });

})

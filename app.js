
$(document).ready(function(){
  // var submitting = function(){

  $("#subButton").submit(function(event){
    event.preventDefault();
    var query = $("#inputText").val();
    $.ajax({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search?&q=" + query + "&api_key=dc6zaTOxFJmzC"
    }).done(function(response){
      for (var i = 0; i < response.data.length; i++) {
        $(".gifList").append("<img src='" + response.data[i].images.downsized.url + "'/>");
      }
    });
  });

});

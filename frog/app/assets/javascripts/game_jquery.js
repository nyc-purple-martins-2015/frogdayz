// up arrow: 38  right: 39  down: 40   left: 37

$(document).ready(function(){


  $(".start_game").on("submit", function(event){
    event.preventDefault();

    $.ajax({
      method: "get",
      url: $(this).attr("action"),
    })
    .done(function(data){
      $(".main_game").append(data);
      $(".start_game").hide();
    });

  });

  $(document).on('keyup', function(key){
    // up
    if (key.which=== 38) {
      moveUp();


    }
    // right
     if (key.which=== 39) {
      moveRight();

    }
    //down
     if (key.which=== 40) {
      moveDown();

    }
    //left
     if (key.which=== 37) {
      moveLeft();

    }
  });

});

$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($(".danceFloor").height() * Math.random()) + 50,
      $(".danceFloor").width() * Math.random(), (Math.random() * 1000) + 100
    );

    window.dancers.push(dancer);
    $(".danceFloor").append(dancer.$node);
  });

  $(".lineUpButton").on("click", function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }

  });

  $(".spreadOut").on("click", function() {
    console.log("spreadOut is being called.")
    var dancersLength = window.dancers.length;
    for (var i = 0; i < dancersLength - 1; i++) {
      var dancerPrime = window.dancers[i];
      for (var j = (i + 1); j < dancersLength - 1; j++) {
        //Pythag calculation
        var aSquared = Math.pow(dancerPrime._top - window.dancers[j]._top, 2),
          bSquared = Math.pow(dancerPrime._left - window.dancers[j]._left, 2);
        var cPythag = Math.sqrt(aSquared + bSquared);
        if (cPythag < 125) {
          var newLeft = $(".danceFloor").width() * Math.random();
          var newTop = $(".danceFloor").height() * Math.random() + 50;
          window.dancers[i].setPosition(newTop, newLeft);
          console.log("I moved dancer: " + dancers[j])
        }
      }
      //console.log(dancers[i].left)
      // var newLeft = $(".danceFloor").width() * Math.random();
      // console.log(newLeft);
      // var new_to = $(".danceFloor").height() * Math.random() + 50;
      // console.log(new_to);
      // window.dancers[i].setPosition(new_to, newLeft);
    }
  });

  // $('body').on("click", ".ceraDancer", function() {
  //    $(this).toggleClass('spin')
  //   this.setPosition($(".danceFloor").height() * Math.random() + 50,
  //     $(".danceFloor").width() * Math.random());
  // });
});
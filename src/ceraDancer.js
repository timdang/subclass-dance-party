var CeraDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  // this.$node = $('<span class="ceraDancer"><img src="smallMCera.png"></span>');
  this.$node.addClass('ceraDancer spin');
  this.$node.append('<img src="smallMCera.png">');
  this.$node.mouseover(function() {
    $(this).toggleClass('spin');
  });
  this.$node.mouseout(function() {
    $(this).toggleClass('spin');
  });
};
CeraDancer.prototype = Object.create(Dancer.prototype);
CeraDancer.prototype.constructor = CeraDancer;

CeraDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  //this.setPosition(($(".danceFloor").height() * Math.random()) + 50, $(".danceFloor").width() * Math.random())
};

CeraDancer.prototype.lineUp = function() {
  Dancer.prototype.setPosition.call(this, 700, null);
};

var SquareDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  // this.$node = $('<span class="squareDancer"></span>');
  this.$node.addClass('squareDancer')
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

/*  this.oldStep = function() {
    return Dancer.prototype.step.call(this);
  };*/
  this.setPosition(top, left);
};
SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};

SquareDancer.prototype.lineUp = function() {
  console.log("This button is working");
  //$(this).css("left", "50px");
  Dancer.prototype.setPosition.call(this, null, "100%");
};
// You are a frog and you hop across lilly pads eating status 400-500 errors

// accumulate points per error eaten

var moveUp = function(){
  var curPos = $(".frog");
  var cellIndex = curPos.parent().index();
  var rowIndex = curPos.parent().parent().index();
  var row = curPos.parent().parent().parent().children().eq(rowIndex -1);
  var newPos = row.children().eq(cellIndex);
  if (ifJared(newPos)) {
    $(".jared-fly").parent().empty();
    $(newPos).append('<div class="frog animated bounce"></div>');
  } else {
    $(".frog").parent().empty();
    $(newPos).append('<div class="frog animated bounce"></div>');
  }
};

var moveDown = function(){
  var curPos = $(".frog");
  var cellIndex = curPos.parent().index();
  var rowIndex = curPos.parent().parent().index();
  var row = curPos.parent().parent().parent().children().eq(rowIndex +1);
  var newPos = row.children().eq(cellIndex);
  if (ifJared(newPos)) {
    $(".jared-fly").parent().empty();
    $(newPos).append('<div class="frog animated bounce"></div>');
  } else {
    $(".frog").parent().empty();
    $(newPos).append('<div class="frog animated bounce"></div>');
  }
};

var moveLeft = function(){
  var curPos = $(".frog");
  var cellIndex = curPos.parent().index();
  var rowIndex = curPos.parent().parent().index();
  var row = curPos.parent().parent().parent().children().eq(rowIndex);
  var newPos = row.children().eq(cellIndex-1);
  if (ifJared(newPos)) {
    $(".jared-fly").parent().empty();
    $(newPos).append('<div class="frog animated bounce"></div>');
  } else {
    $(".frog").parent().empty();
    $(newPos).append('<div class="frog animated bounce"></div>');
  }
};

var moveRight = function(){
  var curPos = $(".frog");
  var cellIndex = curPos.parent().index();
  var rowIndex = curPos.parent().parent().index();
  var row = curPos.parent().parent().parent().children().eq(rowIndex);
  var newPos = row.children().eq(cellIndex+1);
  if (ifJared(newPos)) {
    $(".jared-fly").parent().empty();
    $(newPos).append('<div class="frog animated bounce"></div>');
  } else {
    $(".frog").parent().empty();
    $(newPos).append('<div class="frog animated bounce"></div>');
  }
};

var ifJared = function(newPos){
  var posJared = $(".jared-fly");
  return newPos === posJared;
}
var Pond = function(){
  this.spaces = [["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]];

};

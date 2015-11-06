// You are a frog and you hop across lilly pads eating status 400-500 errors

// accumulate points per error eaten
var Pond = function(){
  this.spaces = [["","","","",""],["","frog","","",""],["jared","","","",""],["","","","",""],["","","","",""]];
};

var Player= function(){
  this.points = 0;
}

Player.prototype.catchJared = function(){
  this.points += 100;
}

var Game = function(){
  player = new Player;
  pond = new Pond;

};
// still have to fix the going too far logic

Pond.prototype.up = function(){
  var curLocation = findFrog();
  this.spaces[curLocation[0]][curLocation[1]] = "";
  if (curLocation[0]=== 0) {
    curLocation[0] = 5;
  }
  if (this.spaces[curLocation[0]-1][curLocation[1]] === "jared") {
    player.catchJared();
    resetJared();
  }
  this.spaces[curLocation[0]-1][curLocation[1]] = "frog";
}

Pond.prototype.down = function(){
  var curLocation = findFrog();
  this.spaces[curLocation[0]][curLocation[1]] = "";
  if (curLocation[0]=== 4) {
    curLocation[0]= -1;
  }
  if (this.spaces[curLocation[0]+1][curLocation[1]] === "jared") {
    player.catchJared();
    resetJared();
  }
  this.spaces[curLocation[0]+1][curLocation[1]] = "frog";
}
Pond.prototype.left = function(){
  var curLocation = findFrog();
  this.spaces[curLocation[0]][curLocation[1]] = "";
  if (curLocation[1]=== 0) {
    curLocation[1]= 5;
  }
  if (this.spaces[curLocation[0]][curLocation[1]-1] === "jared") {
    player.catchJared();
    resetJared();
  }
  this.spaces[curLocation[0]][curLocation[1]-1] = "frog";
}
Pond.prototype.right = function(){
  var curLocation = findFrog();
  this.spaces[curLocation[0]][curLocation[1]] = "";
  if (curLocation[1]=== 4) {
    curLocation[1]= -1;
  }
  if (this.spaces[curLocation[0]][curLocation[1]+1] === "jared") {
    player.catchJared();
    resetJared();
  }
  this.spaces[curLocation[0]][curLocation[1]+1] = "frog";
}



var findFrog = function(){
  for (var i = 0; i < pond.spaces.length; i++) {
    if (pond.spaces[i].indexOf("frog") !== -1) {
      var frogCol = i
      var frogCell = pond.spaces[i].indexOf("frog");
    }
  }
  return [frogCol, frogCell];
}


// HTML movement functions
var moveUp = function(){
  var curPos = $(".frog");
  var cellIndex = curPos.parent().index();
  var rowIndex = curPos.parent().parent().index();
  if (rowIndex === 0) {
    var newIndex = 4;
  } else {
    newIndex = rowIndex - 1;
  }
  var row = curPos.parent().parent().parent().children().eq(newIndex);
  var newPos = row.children().eq(cellIndex);
   $(newPos).empty();
  moveFrog(newPos);
  pond.up();
};

var moveDown = function(){
  var curPos = $(".frog");
  var cellIndex = curPos.parent().index();
  var rowIndex = curPos.parent().parent().index();
  if (rowIndex === 4) {
    var newIndex = 0;
  } else {
    newIndex = rowIndex + 1;
  }
  var row = curPos.parent().parent().parent().children().eq(newIndex);

  var newPos = row.children().eq(cellIndex);
   $(newPos).empty();
  moveFrog(newPos);
  pond.down();
};

var moveLeft = function(){
  var curPos = $(".frog");
  var cellIndex = curPos.parent().index();
  var rowIndex = curPos.parent().parent().index();
  var row = curPos.parent().parent().parent().children().eq(rowIndex);
   if (cellIndex === 0) {
    var newIndex = 4;
  } else {
    newIndex = cellIndex - 1;
  }
  var newPos = row.children().eq(newIndex);
   $(newPos).empty();
  moveFrog(newPos);
  pond.left();
};

var moveRight = function(){
  var curPos = $(".frog");
  var cellIndex = curPos.parent().index();
  var rowIndex = curPos.parent().parent().index();
  var row = curPos.parent().parent().parent().children().eq(rowIndex);
  if (cellIndex === 4) {
    var newIndex = 0;
  } else {
    newIndex = cellIndex + 1;
  }
  var newPos = row.children().eq(newIndex);
  $(newPos).empty();
  moveFrog(newPos);
  pond.right();
};

var moveFrog = function(newPos){
    $(".frog").parent().empty();
    $(newPos).append('<div class="frog animated bounce"></div>');
}


var resetJared = function(){
  var randRow = Math.floor(Math.random() * (5-0));
  var randCell = Math.floor(Math.random() * (5-0));
  pond.spaces[randRow][randCell] = "jared";
  var newRow = $('.pond').children().eq(randRow);
  var newJaredPos = newRow.children().eq(randCell);

  // if ($(newJaredPos).first() === $('.frog')) {
  //   resetJared();
  // } else {
    // $(newJaredPos).empty();
    $(newJaredPos).append('<div class="jared-fly"></div>');
  // }
}

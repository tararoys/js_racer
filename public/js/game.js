function Game(player1, player2) {
  this.player1Name = player1.name
  this.player2Name = player2.name

  this.done = false;
  this.logevent = [];
  this.winner = ""
  this.time = ""
}

Game.prototype.onKeyUp = function(event) {
  if(this.done === false) {
    this.advanceCar(event);
    this.finish();
  }
}
Game.prototype.advanceCar = function(event) {
  this.startTimer(event)
  if(event.which === 81) {
    this.advPlayer('1')
  }
  else if(event.which === 80) {
    this.advPlayer('2')
  }
}

Game.prototype.startTimer = function(event) {
  if(event.which === 81 || event.which === 80) this.logevent.push(event);
}

Game.prototype.advPlayer = function(player) {
  var str = '#player' + player + '_strip .active'
  $(str).next().addClass('active');
  $(str).prev().removeClass('active');
}

Game.prototype.finish = function() {
  if ($('#finish_line1').hasClass('active') ) {
    this.finishLine(this.player1Name)
  }
  else if($('#finish_line2').hasClass('active') ) {
    this.finishLine(this.player2Name)
  }
}

Game.prototype.finishLine = function(player) {
  this.done = true;
  this.declareWinner(player);
  this.showPlayAgain();
  this.recordResults();
}

Game.prototype.timeCalc = function() {
  var start_time = this.logevent[0].timeStamp
  var finish_time = new Date().getTime();
  this.time = (finish_time - start_time);
}

Game.prototype.declareWinner = function(player) {
  this.timeCalc();
  $('#declare_winner').html(player + ' Wins ' + this.time/1000 + ' seconds');
  this.winner = player;
}

Game.prototype.showPlayAgain = function() {
  $('#again').show();
}

Game.prototype.recordResults = function() {
  form_data = {'time': this.time, 'winner': this.winner }
  $.post("/game", form_data, function(response){
  });
}

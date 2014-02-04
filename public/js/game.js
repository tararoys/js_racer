function Game(player1, player2) {
  this.player1Name = player1.name
  this.player2Name = player2.name

  var done = false;
  var logevent = [];
  var winner = ""
  var time = ""

  this.onKeyUp = function(event) {
    if(done === false) {
      this.advanceCar(event);
      this.finish();
    }
  }
  this.advanceCar = function(event) {
    this.startTimer(event)
    if(event.which === 81) {
      this.advPlayer('1')
    }
    else if(event.which === 80) {
      this.advPlayer('2')
    }
  }

  this.startTimer = function(event) {
    if(event.which === 81 || event.which === 80) logevent.push(event);
  }

  this.advPlayer = function(player) {
    var str = '#player' + player + '_strip .active'
    $(str).next().addClass('active');
    $(str).prev().removeClass('active');
  }

  this.finish = function() {
    if ($('#finish_line1').hasClass('active') ) {
      this.finishLine(this.player1Name)
    }
    else if($('#finish_line2').hasClass('active') ) {
      this.finishLine(this.player2Name)
    }
  }

  this.finishLine = function(player) {
    done = true;
    this.declareWinner(player);
    this.showPlayAgain();
    this.recordResults();
  }

  this.timeCalc = function() {
    var start_time = logevent[0].timeStamp
    var finish_time = new Date().getTime();
    time = (finish_time - start_time);
  }

  this.declareWinner = function(player) {
    this.timeCalc();
    $('#declare_winner').html(player + ' Wins ' + time/1000 + ' seconds');
    winner = player;
  }

  this.showPlayAgain = function() {
    $('#again').show();
  }

  this.recordResults = function() {
    form_data = {'time': time, 'winner': winner }
    $.post("/game", form_data, function(response){
    });
  }
}


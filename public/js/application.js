$(document).ready(function() {
  var player1 = $(".racer_table").data('player-one');
  var player2 = $('.racer_table').data('player-two');
  var done = false;
  var logevent = [];

  $(document).keyup(function(e){
    e.preventDefault();

    if (done === false) {
      var code = e.keyCode || e.which;

      if(code === 81) {
        logevent.push(e)
        $('#player1_strip .active').next().addClass('active');
        var last1 = $('#player1_strip .active').last();
        $('#player1_strip .active').removeClass('active');
        last1.addClass('active');
      }
      else if(code === 80) {
        logevent.push(e)
        $('#player2_strip .active').next().addClass('active');
        var last2 = $('#player2_strip .active').last();
        $('#player2_strip .active').removeClass('active');
        last2.addClass('active');
      }

      var start_time = logevent[0].timeStamp
      var winner = ""

      if ($('#finish_line1').hasClass('active') ){
        done = true
        var finish_time = new Date().getTime();
        if (finish_time) time = (finish_time - start_time);
        $('#declare_winner').html(player1 + ' Wins ' + time/1000 + 'seconds');
        $('#again').show();
        winner = player1
      }
      else if ($('#finish_line2').hasClass('active') ){
        done = true
        var finish_time = new Date().getTime();
        if (finish_time) time = (finish_time - start_time);
        $('#declare_winner').html(player2 + ' Wins ' + time/1000 + 'seconds');
        winner = player2;
        $('#again').show()

      }

        form_data = {'time': time, 'winner': winner }
        $.post("/game", form_data, function(response){
        });

    }
  });
});

$(document).ready(function() {
  var player1 = new Player($(".racer_table").data('player-one'));
  var player2 = new Player($('.racer_table').data('player-two'));

  var game = new Game(player1, player2);

  $(document).on('keyup', function(event) {
    game.onKeyUp(event);
  });
});

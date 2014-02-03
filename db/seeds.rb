player1 = Player.create(name: 'Jacky')
player2 = Player.create(name: 'Tara')

game = Game.create(name: 'Jacky-Tara', time: Time.now, winner: 1)
game.players << player1
game.players << player2

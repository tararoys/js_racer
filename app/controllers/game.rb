post '/play' do
  player1 = Player.create(name: params['player1'])
  player2 = Player.create(name: params['player2'])

  game = Game.create(name: "#{player1.name}-#{player2.name}-#{Time.now}")
  game.players << player1
  game.players << player2
  session[:player1] = player1.name
  session[:player2] = player2.name
  session[:game] = game.name

  redirect '/game'

end

get '/game' do
  erb :game
end

post '/game' do
  game = Game.where(name: session[:game]).first
  game.time = params["time"]
  game.winner = params["winner"]
  game.save
end

get '/exit' do
  session.clear
  redirect '/'
end

get '/again' do
  game = Game.create(name: "#{session[:player1]}-#{session[:player2]}-#{Time.now}")
  game.players << Player.where(name: session[:player1]).first
  game.players << Player.where(name: session[:player2]).first
  session[:game] = game.name

  redirect '/game'
end

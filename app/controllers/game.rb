post '/play' do
  player1 = Player.create(name: params['player1'])
  player2 = Player.create(name: params['player2'])
  session[:game] = Game.create(name: "#{player1.name}-#{player2.name}-#{Time.now}").name
  session[:player1] = player1.name
  session[:player2] = player2.name
  p session
  redirect '/game'

end

get '/game' do
  erb :game
end

post '/game' do
  puts params['time']
  puts params['winner']
end

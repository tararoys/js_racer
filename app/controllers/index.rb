get '/' do
  session.clear
  # Look in app/views/index.erb
  erb :index
end

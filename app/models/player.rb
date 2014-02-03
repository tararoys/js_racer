class Player < ActiveRecord::Base
  # Remember to create a migration!
  has_many :lanes
  has_many :games, :through => :lanes
end

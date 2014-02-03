class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :lanes
  has_many :players, :through => :lanes
end

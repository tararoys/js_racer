class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.integer :winner
      t.time :time
      t.timestamps
    end
  end
end

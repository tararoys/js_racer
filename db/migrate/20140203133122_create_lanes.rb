class CreateLanes < ActiveRecord::Migration
  def change
    create_table :lanes do |t|
      t.belongs_to :player
      t.belongs_to :game
      t.timestamps
    end
  end
end

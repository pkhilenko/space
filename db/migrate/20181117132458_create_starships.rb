class CreateStarships < ActiveRecord::Migration[5.2]
  def change
    create_table :starships do |t|
      t.string :name
      t.string :model
      t.string :manufacturer
      t.integer :length
      t.integer :crew

      t.timestamps
    end
  end
end

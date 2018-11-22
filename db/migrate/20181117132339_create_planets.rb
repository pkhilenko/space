class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.string :name
      t.integer :population
      t.integer :rotation_period
      t.integer :diameter

      t.timestamps
    end
  end
end

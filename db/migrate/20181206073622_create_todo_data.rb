class CreateTodoData < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_data do |t|
      t.string :label
      t.boolean :important, default: false
      t.boolean :done, default: false

      t.timestamps
    end
  end
end

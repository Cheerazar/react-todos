class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :body
      t.integer :todo_list_id
      t.timestamps
    end
  end
end

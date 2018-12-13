class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :genre, null: false
      t.text :description

      t.timestamps
    end
    add_index :songs, :user_id
    add_index :songs, :title
  end
end

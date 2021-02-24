class CreateArtworks < ActiveRecord::Migration[6.0]
  def change
    create_table :artworks do |t|
      t.text :caption, null: false
      t.integer :vertical
      t.integer :horizontal
      t.integer :size
      t.references :room, null: false, foreign_key: true
      t.timestamps
    end
  end
end

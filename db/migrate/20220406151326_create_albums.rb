class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :album_name
      t.references :artist, null: false, foreign_key: true
      t.string :genre
      t.integer :num_tracks
      t.date :release_date
      t.string :album_image
      t.string :label
      t.integer :album_duration

      t.timestamps
    end
  end
end

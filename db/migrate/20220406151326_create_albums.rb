class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :album_name
      t.string :genre
      t.integer :num_tracks
      t.date :release_date
      t.string :album_image
      t.string :label
      t.integer :album_duration
      t.integer :deezer_album_id
      t.string :artist_name
      t.string :artist_image
      t.integer :deezer_artist_id

      t.timestamps
    end
  end
end

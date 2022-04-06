class CreateTracks < ActiveRecord::Migration[7.0]
  def change
    create_table :tracks do |t|
      t.references :album, null: false, foreign_key: true
      t.string :track_name
      t.integer :track_duration

      t.timestamps
    end
  end
end

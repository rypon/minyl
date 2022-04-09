# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_04_06_151402) do
  create_table "albums", force: :cascade do |t|
    t.string "album_name"
    t.string "genre"
    t.integer "num_tracks"
    t.date "release_date"
    t.string "album_image"
    t.string "label"
    t.integer "album_duration"
    t.integer "deezer_album_id"
    t.string "artist_name"
    t.string "artist_image"
    t.integer "deezer_artist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "album_id", null: false
    t.string "review_text"
    t.integer "review_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_reviews_on_album_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.integer "album_id", null: false
    t.string "track_name"
    t.integer "track_duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_tracks_on_album_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "prifile_image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "vinyls", force: :cascade do |t|
    t.date "purchase_date"
    t.integer "user_id", null: false
    t.integer "album_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_vinyls_on_album_id"
    t.index ["user_id"], name: "index_vinyls_on_user_id"
  end

  add_foreign_key "reviews", "albums"
  add_foreign_key "reviews", "users"
  add_foreign_key "tracks", "albums"
  add_foreign_key "vinyls", "albums"
  add_foreign_key "vinyls", "users"
end

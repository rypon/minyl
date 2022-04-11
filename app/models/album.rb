class Album < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :tracks
    has_many :users
end

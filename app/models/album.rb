class Album < ApplicationRecord
    has_many :reviews
    has_many :tracks
end

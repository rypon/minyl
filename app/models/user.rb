class User < ApplicationRecord
  has_secure_password

  has_many :vinyls
  has_many :reviews
  has_many :albums, through: :vinyls

  validates :username, presence: true, on: :create
  validates :username, uniqueness: true, on: :create
  validates :password, length: {minimum: 5, maximum: 10}, on: :create

end

class Room < ApplicationRecord
  belongs_to :gallery
  has_many :artworks, dependent: :destroy
end

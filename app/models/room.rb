class Room < ApplicationRecord
  belongs_to :gallery
  has_many_attached :artworks
end

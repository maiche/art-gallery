class Artwork < ApplicationRecord
  validates :image, presence: true
  
  belongs_to :room
  has_one_attached :image
end

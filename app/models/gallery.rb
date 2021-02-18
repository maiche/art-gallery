class Gallery < ApplicationRecord
  # with_options presence: true do
  #   validates :title, :description, :artworks
  # end
  
  belongs_to :user
  has_one_attached :top_image
  # has_many_attached :artworks
  has_one :room
end

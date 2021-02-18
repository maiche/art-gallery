class Gallery < ApplicationRecord
  with_options presence: true do
    validates :title, :description
  end
  
  belongs_to :user
  has_one_attached :top_image
  has_many :rooms, dependent: :destroy
end

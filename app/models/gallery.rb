class Gallery < ApplicationRecord
  with_options presence: true do
    validates :title, :description
  end
  
  belongs_to :user
end

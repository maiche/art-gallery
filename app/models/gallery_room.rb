class GalleryRoom
  include ActiveModel::Model
  attr_accessor :title, :top_image, :description, :artworks, :user_id

  with_options presence: true do
    validates :title, :description, :artworks, :user_id
  end

  def save
    gallery = Gallery.create(title: title, top_image: top_image, description: description, user_id: user_id)
    Room.create(artworks: artworks, gallery_id: gallery.id)
  end
end
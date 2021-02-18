class RoomsController < ApplicationController
  def index
    @gallery = Gallery.find(params[:gallery_id])
    @room = @gallery.room
    @artworks = @room.artworks
  end
end

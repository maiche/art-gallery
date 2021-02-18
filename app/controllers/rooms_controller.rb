class RoomsController < ApplicationController
  def index
    @gallery = Gallery.find(params[:gallery_id])
    @room = @gallery.rooms[0]
    @artworks = @room.artworks
  end
end

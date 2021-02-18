class RoomsController < ApplicationController
  before_action :authenticate_user!, except: :index

  def index
    @gallery = Gallery.find(params[:gallery_id])
    @room = @gallery.rooms[0]
    @artworks = @room.artworks
  end

  def edit
    @gallery = Gallery.find(params[:gallery_id])
    redirect_to root_path if current_user.id != @gallery.user_id
    @room = Room.find(params[:id])
  end
end

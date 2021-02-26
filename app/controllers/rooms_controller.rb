class RoomsController < ApplicationController
  before_action :authenticate_user!, except: :index
  before_action :set_gallery, only: [:index, :edit, :update]
  before_action :move_to_root, only: [:edit, :update]

  def index
    @room = @gallery.rooms[0]
    @artworks = @room.artworks
  end

  def edit
    @room = Room.find(params[:id])
    @artworks = @room.artworks
  end

  def update
    artwork = Artwork.find(params[:artwork_id])
    artwork.update(vertical: params[:vertical], horizontal: params[:horizontal], size: params[:size])
    render json:{ artwork: artwork }
  end

  private

  def set_gallery
    @gallery = Gallery.find(params[:gallery_id])
  end

  def move_to_root
    redirect_to root_path if current_user.id != @gallery.user_id
  end
end

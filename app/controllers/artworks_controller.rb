class ArtworksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_gallery_room, :move_to_root

  def new
    @artwork = Artwork.new
  end

  def create
    @artwork = Artwork.new(artwork_params)
    if @artwork.save
      redirect_to edit_gallery_room_path(params[:gallery_id], params[:room_id])
    else
      render :new
    end
  end

  def edit
    @artwork = Artwork.find(params[:id])
  end

  def update
    @artwork = Artwork.find(params[:id])
    if @artwork.update(artwork_params)
      redirect_to edit_gallery_room_path(params[:gallery_id], params[:room_id])
    else
      render :edit
    end
  end

  def destroy
    @artwork = Artwork.find(params[:id])
    @artwork.destroy
    redirect_to edit_gallery_room_path(params[:gallery_id], params[:room_id])
  end

  private

  def artwork_params
    params.require(:artwork).permit(:image, :caption).merge(room_id: params[:room_id])
  end

  def set_gallery_room
    @gallery = Gallery.find(params[:gallery_id])
    @room = Room.find(params[:room_id])
  end

  def move_to_root
    redirect_to root_path if current_user.id != @gallery.user_id
  end
end

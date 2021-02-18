class ArtworksController < ApplicationController
  before_action :authenticate_user!

  def new
    @gallery = Gallery.find(params[:gallery_id])
    @room = Room.find(params[:room_id])
    @artwork = Artwork.new
  end

  def create
    @gallery = Gallery.find(params[:gallery_id])
    @room = Room.find(params[:room_id])
    @artwork = Artwork.new(artwork_params)
    if @artwork.save
      redirect_to edit_gallery_room_path(@gallery.id, @room.id)
    else
      render :new
    end
  end

  private

  def artwork_params
    params.require(:artwork).permit(:image, :caption).merge(room_id: params[:room_id])
  end
end

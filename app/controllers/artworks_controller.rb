class ArtworksController < ApplicationController
  before_action :authenticate_user!

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

  private

  def artwork_params
    params.require(:artwork).permit(:image, :caption).merge(room_id: params[:room_id])
  end
end

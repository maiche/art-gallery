class GalleriesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_gallery, only: [:edit, :update, :show, :destroy]
  before_action :move_to_root, only: [:edit, :update, :destroy]

  def index
    @galleries = Gallery.all.order('created_at DESC')
  end

  def new
    @gallery_room = GalleryRoom.new
  end

  def create
    @gallery_room = GalleryRoom.new(gallery_params)
    if @gallery_room.valid?
      @gallery_room.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @gallery.update(gallery_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def show
  end

  def destroy
    @gallery.destroy
    redirect_to root_path
  end

  private

  def gallery_params
    params.require(:gallery_room).permit(:title, :top_image, :description, artworks: []).merge(user_id: current_user.id)
  end

  def set_gallery
    @gallery = Gallery.find(params[:id])
  end

  def move_to_root
    redirect_to root_path if current_user.id != @gallery.user_id
  end
end

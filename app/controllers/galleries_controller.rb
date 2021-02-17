class GalleriesController < ApplicationController
  def index
  end

  def new
    @gallery = Gallery.new
  end

  def create
  end
end

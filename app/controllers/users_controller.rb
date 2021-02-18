class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @galleries = @user.galleries.order('created_at DESC')
  end
end

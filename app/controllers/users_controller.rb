class UsersController < ApplicationController
  before_action :authenticate_user!, except: :show
  before_action :set_user
  before_action :move_to_root

  def edit
  end

  def update
    if @user.update(user_params)
      redirect_to user_path(current_user.id)
    else
      render :edit
    end
  end

  def show
    @galleries = @user.galleries.order('created_at DESC')
  end

  private

  def user_params
    params.require(:user).permit(:profile)
  end

  def set_user
    @user = User.find(params[:id])
  end

  def move_to_root
    redirect_to root_path if current_user.id != @user.id
  end
end

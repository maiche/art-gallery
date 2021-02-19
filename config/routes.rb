Rails.application.routes.draw do
  devise_for :users
  root to: 'galleries#index'
  resources :galleries do
    resources :rooms, only: [:index, :edit] do
      resources :artworks, only: [:new, :create, :edit, :update]
    end
  end
  resources :users, only: :show
end

Rails.application.routes.draw do
  devise_for :users
  root to: 'galleries#index'
  resources :galleries do
    resources :rooms, only: [:index, :edit]
  end
  resources :users, only: :show
end

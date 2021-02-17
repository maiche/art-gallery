Rails.application.routes.draw do
  devise_for :users
  root to: 'galleries#index'
  resources :galleries, only: [:index, :new, :create, :show]
end

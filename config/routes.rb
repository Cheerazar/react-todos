Rails.application.routes.draw do
  root 'home#index'

  resources :lists do
    resources :todos
  end
end

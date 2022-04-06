Rails.application.routes.draw do
  resources :artists
  resources :tracks
  resources :albums
  resources :reviews
  resources :vinyls
  resources :users, only: [:index, :show, :update, :destroy, :create]

  post '/login', to: 'sessions#login'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

Rails.application.routes.draw do
  resources :tracks
  resources :albums , only: [:index, :show, :create, :destroy] do
    resources :reviews, only: [:index, :create]
  end
  resources :reviews, only: [:create, :show]
  resources :vinyls
  
  resources :users, only: [:index, :show, :update, :destroy, :create] do
    resources :albums, only: [:index]
  end

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/authorized_user', to: 'users#show'





  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

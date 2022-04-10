Rails.application.routes.draw do
  resources :tracks
  resources :albums , only: [:index, :show, :create] do
    resources :reviews
  end
  # resources :reviews 
  resources :vinyls
  resources :users, only: [:index, :show, :update, :destroy, :create]

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/authorized_user', to: 'users#show'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

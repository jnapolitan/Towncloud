Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show]
    resources :songs, except: [:new, :edit] do
      resources :comments, only: [:create, :index]
    end
    resource :session, only: [:create, :destroy]
    resources :comments, only: :destroy
  end
end

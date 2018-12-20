Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show]
    resources :songs, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
  end
end

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :trainers, except: [:new, :edit]
    end
  end
end

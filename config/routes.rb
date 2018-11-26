Rails.application.routes.draw do
  root 'landing#index'
  mount Space::Base => '/'
  match '*path', to: 'landing#index', via: :all
end

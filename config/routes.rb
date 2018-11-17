Rails.application.routes.draw do
  root 'landing#index'
  mount Space::Base => '/'
end

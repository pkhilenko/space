module Space
  module V1
    class Planets < Grape::API
      version 'v1', using: :path
      format :json
      prefix :api

      resource :planets do
        desc 'Return list of planets'
        get do
          planets = Planet.all
          present planets, with: Space::Entities::Planet
        end

        desc 'Return a specific book'
        route_param :id do
          get do
           planet = Planet.find(params[:id])
           present planet, with: Space::Entities::Planet
          end
        end
      end
    end
  end
end

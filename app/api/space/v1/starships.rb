module Space
  module V1
    class Starships < Grape::API
      version 'v1', using: :path
      format :json
      prefix :api

      resource :starships do
        desc 'Return list of planets'
        get do
          starships = Starship.all
          present starships, with: Space::Entities::Starship
        end

        desc 'Return a specific book'
        route_param :id do
          get do
           starship = Starship.find(params[:id])
           present starship, with: Space::Entities::Starship
          end
        end
      end
    end
  end
end

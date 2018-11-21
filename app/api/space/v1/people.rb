module Space
  module V1
    class People < Grape::API
      version 'v1', using: :path
      format :json
      prefix :api

      resource :people do
        desc 'Return list of people'
        get do
          people = Person.all.first(6)
          present people, with: Space::Entities::Person
        end

        desc 'Return a specific person'
        route_param :id do
          get do
           person = Person.find(params[:id])
           present person, with: Space::Entities::Person
          end
        end
      end
    end
  end
end

module Todos
  module V1
    class Todo < Grape::API
      version 'v1', using: :path
      format :json
      prefix :api

      resource :todos do
        desc 'Return list of todos'
        get do
          todos = TodoDatum.all
          present todos, with: Todos::Entities::Todo
        end

        desc 'Return a specific todo'
        route_param :id do
          get do
           todo = TodoDatum.find(params[:id])
           present todo
          end
        end

        desc 'Create a todo.'
        params do
          requires :todos, type: Hash do
            requires :label
          end
        end

        post do
          todo = TodoDatum.create(params[:todos])
          present todo
        end
      end
    end
  end
end


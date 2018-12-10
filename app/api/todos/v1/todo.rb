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
           present todo, with: Todos::Entities::Todo
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

        desc 'Delete todo'
        route_param :id do
          delete do
            TodoDatum.find(params[:id]).destroy
          end
        end
      end

      resource :tdone do
        route_param :id do
          desc 'toggle done'
          put do 
            todo = TodoDatum.find(params[:id])
            todo.update(done: !todo.done)
          end
        end
      end

      resource :tinportant do
        route_param :id do
          desc 'toggle important'
          put do 
            todo = TodoDatum.find(params[:id])
            todo.update(important: !todo.important)
          end
        end
      end
    end
  end
end


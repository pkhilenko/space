module Todos
  class Base < Grape::API
    mount Todos::V1::Todo
  end
end

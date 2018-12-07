module Todos
 module Entities
  class Todo < Grape::Entity
   expose :id
   expose :label
   expose :important
   expose :done
  end
 end
end

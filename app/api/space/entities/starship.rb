module Space
 module Entities
  class Starship < Grape::Entity
   expose :id
   expose :name
   expose :model
   expose :manufacturer
   expose :length
   expose :crew
  end
 end
end

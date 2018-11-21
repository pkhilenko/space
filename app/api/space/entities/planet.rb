module Space
 module Entities
  class Planet < Grape::Entity
   expose :id
   expose :name
   expose :population
   expose :rotation_period
   expose :diameter
  end
 end
end

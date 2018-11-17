module Space
 module Entities
  class Person < Grape::Entity
   expose :id
   expose :name
   expose :gender
   expose :birth_day
   expose :eye_color
  end
 end
end

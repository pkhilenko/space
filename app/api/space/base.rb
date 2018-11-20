module Space
  class Base < Grape::API
    mount Space::V1::People
    mount Space::V1::Planets
    mount Space::V1::Starships
  end
end

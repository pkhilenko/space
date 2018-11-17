module Space
  class Base < Grape::API
    mount Space::V1::People
  end
end

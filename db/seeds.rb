<<<<<<< HEAD
=======
require 'faker'

>>>>>>> step-2
50.times do |person|
  gender = ['M', 'F']
  Person.create(name: Faker::Name.unique.name, gender: gender[SecureRandom.random_number(0..1)],
    birth_day: Faker::Date.birthday(18, 65), eye_color: Faker::Color.color_name)
end   
<<<<<<< HEAD
=======

25.times do |planet|
    Planet.create(name: "(#{Faker::Space.star_cluster}) - #{Faker::Space.planet}", 
      diameter: SecureRandom.random_number(1000..50000), population: SecureRandom.random_number(1000..50000000), 
      rotation_period: SecureRandom.random_number(30..2000)) 
end

Planet.all.each do |planet|
  number = SecureRandom.random_number(30..3000)
  Starship.create(name: "#{planet.name} #{Faker::Space.nasa_space_craft}", model: Faker::Space.agency_abv,
    manufacturer: Faker::Space.company, length: number, crew: number/SecureRandom.random_number(1..3))
end
>>>>>>> step-2

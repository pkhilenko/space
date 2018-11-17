50.times do |person|
  gender = ['M', 'F']
  Person.create(name: Faker::Name.unique.name, gender: gender[SecureRandom.random_number(0..1)],
    birth_day: Faker::Date.birthday(18, 65), eye_color: Faker::Color.color_name)
end   

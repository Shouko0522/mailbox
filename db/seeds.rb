require 'faker'



puts 'Creating 100 fake email...'
100.times do
  email = Email.create!(
    address_from: Faker::Internet.email,
    address_to: Faker::Internet.email,
    date: Faker::DateTime
  )
  email.save!

  end
end

puts 'Finished!'

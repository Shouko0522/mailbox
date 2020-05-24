require 'faker'

email.create(address_from:"",address_to:"nii@gmail.com",date:"123456")


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

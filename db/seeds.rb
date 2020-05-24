require 'faker'

email.create(adress_from:"",adress_to:"nii@gmail.com",date:"123456")
email.create(adress_from:"",adress_to:"nii@gmail.com",date:"123456")
email.create(adress_from:"",adress_to:"nii@gmail.com",date:"123456")
email.create(adress_from:"",adress_to:"nii@gmail.com",date:"123456")
email.create(adress_from:"",adress_to:"nii@gmail.com",date:"123456")
email.create(adress_from:"",adress_to:"nii@gmail.com",date:"123456")



puts 'Creating 100 fake email...'
100.times do
  email = Email.create!(
    adress_from: Faker::Name.name,
    adress_to: Faker::Internet.email,
    date: "123456"
  )
  email.save!

  end
end

puts 'Finished!'

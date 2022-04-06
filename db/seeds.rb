User.destroy_all

puts 'DESTROYED ...'

puts 'Seeding test users...'
User.create(username: "ryan", password: 'password')
User.create(username: "kyle", password: 'password')




puts 'Done seeding!'
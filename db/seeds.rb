greetings = [
  "Hello!",
  "Hi there!",
  "Greetings!",
  "Welcome!",
  "Salutations!"
]
  
greetings.each do |greeting|
  Greeting.create(content: greeting)
end
greetings = [
  "Hello!",
  "Hi!",
  "Greetings!",
  "Good day!"
]
  
greetings.each do |greeting|
  Greeting.create(content: greeting)
end
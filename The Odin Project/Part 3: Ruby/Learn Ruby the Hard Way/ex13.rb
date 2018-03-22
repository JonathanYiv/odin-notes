# unpacks ARGV and assigns it to three variables
first, second, third = ARGV

puts "Your first variable is #{first}"
puts "Your second variable is #{second}"
puts "Your third variable is #{third}"


puts "Do something..."
variable = $stdin.gets.chomp
puts "Your variable is #{variable}"

puts "Try this..."
variable2 = gets.chomp # this returns an error since you need to use $stdin to get input from the command line
puts "This is it: #{variable2}"


# gets.chomp input keyboard while script is running
# ARGV is input from command line
width = 50;
table_of_contents = ["Table of Contents", "Chapter 1: Numbers", "page 1", "Chapter 2: Letters", "page 72", "Chapter 3: Variables", "page 118"]
puts(table_of_contents[0].center(width))
puts table_of_contents[1].ljust(width/2) + table_of_contents[2].rjust(width/2)
puts table_of_contents[3].ljust(width/2) + table_of_contents[4].rjust(width/2)
puts table_of_contents[5].ljust(width/2) + table_of_contents[6].rjust(width/2)

=begin
	
comment
	
=end




def alphabeticalsort 
	
	puts "Type as many words as you want. One word per line. Then press enter on a blank line for an alphabetical sort."
	
	response = gets.chomp

	array = []

	while response != ""
		array.push response
		response = gets.chomp
	end


	
	# puts array.sort
	# I need to make something that sorts the array
	# It should go through each position of the array, and then compare that position to every other position
	# If the value of the initial position is greater than the value of the other position, then have the two switch places
	length = array.length
	i = 1

	while i < array.length

		temp = array[i]

		j = i - 1



		while (j >= 0 && array[j].capitalize > temp.capitalize)

			array[j + 1] = array[j]

			j = j - 1


		end

		array[j+1] = temp

		i = i + 1

	end

	puts array



end


alphabeticalsort



puts "Pick a starting year:"
startingYear = gets.chomp.to_i
puts "Pick an ending year:"
endingYear = gets.chomp.to_i

while (startingYear <= endingYear)
	if ((startingYear % 4 == 0) and (startingYear % 100 != 0)) or ((startingYear % 4 == 0) and (startingYear % 400 != 0))
		puts startingYear.to_s
	end
	startingYear = startingYear + 1
end






def talking_to_grandma 
	puts "Grandma: Hey sonny. What's crack-a-lacking?"

	response = gets.chomp

	
	if response == "BYE"
		puts "HUH?!?"
		response = gets.chomp
		if response == 'BYE'
			puts "YOU REALLY NEED TO SPEAK UP SONNY BOY!!!!"
			response = gets.chomp
		end
			if response == 'BYE'
				puts "YOU'D LEAVE YOUR POOR OLD GRANDMA?!"
				return
			end
	elsif response == response.upcase
		year = rand(21) + 1930
		puts "NO, NOT SINCE " + year.to_s
		talking_to_grandma
	else
		puts "HUH?! SPEAK UP, SONNY!"
		talking_to_grandma
	end
	
end

talking_to_grandma






beer = 99
while (beer > 1)
	puts beer.to_s + " bottles of beer on the wall, " + beer.to_s + " bottles of beer."
	beer = beer - 1
	puts "Take one down and pass it around, " + beer.to_s + " bottles of beer on the wall."
end
puts beer.to_s + " bottle of beer on the wall, " + beer.to_s + " bottle of beer."
puts "Take one down and pass it around, no more bottles of beer on the wall."
puts "No more bottles of beer on the wall, no more bottles of beer."
puts "Go to the store and buy some more, 99 bottles of beer on the wall."

width = 50;
puts("Table of Contents".center(width))
puts "Chapter 1: Numbers".ljust(width/2) + "page 1".rjust(width/2)
puts "Chapter 2: Letters".ljust(width/2) + "page 72".rjust(width/2)
puts "Chapter 3: Variables".ljust(width/2) + "page 118".rjust(width/2)


puts "What is your first name?"
first_name = gets.chomp
puts "What is your middle name?"
middle_name = gets.chomp
puts "What is your last name?"
last_name = gets.chomp
puts "Hello " + first_name + " " + middle_name + " " + last_name
name_length = first_name.length + middle_name.length + last_name.length
puts "Did you know there are " + name_length.to_s + " characters in your name?"

puts "What is your favorite number?"
number = gets.chomp
number = number.to_i + 1
puts "A bigger and better favoruite number is " + number.to_s

puts "What do you want?"
response = gets.chomp
puts "WHADDAYA MEAN \"" + response.upcase + "\"?!? YOU'RE FIRED!!" 



while 1
	puts "Enter a number>>"
	begin
  	  num = Kernel.gets.match(/\d+/)[0]
  	rescue StandardError=>e
  		puts "Erroneous input!"
  		puts e
  		puts "\tTry again...\n"
  	else
	  puts "#{num} + 1 is: #{num.to_i+1}"
	ensure
		puts "This branch will execute regardless of an error/exception rescuing/not rescuing."
	end
end


# the idea is to wrap any part of the program that could fail in a begin/rescue block. 
# that includes commands that work with outside input (like downloading a webpage or taking user input)


# the retry statement redirects the program back to the begin statement
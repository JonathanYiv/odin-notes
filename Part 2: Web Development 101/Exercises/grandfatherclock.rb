def clock some_proc

	current_hour = Time.now.hour

	#call the proc the number of hours passed
	current_hour.to_i.times do
	some_proc.call

	end

end 

# Dong proc
dong_proc = Proc.new do
puts 'DONG!'
end

ding_proc = Proc.new do
puts 'DING!'
end

clock dong_proc

clock ding_proc
def log block_description, &block
	puts 'Beginning "' + block_description + '"...'
	returned = block.call
	puts "Finished the block"
	puts returned

end

log 'outer block' do

	log 'some little block' do
		5
	end

	log 'yet another block' do
		'I like Thai food!'
	end

	false
end
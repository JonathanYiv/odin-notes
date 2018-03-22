class OrangeTree

	def initialize
		@height = 1
		@fruits = 0
		@age = 0
		puts "A tree is planted"
	end

	def isheight
		return @height
	end

	def oneYearPasses
		@fruits = 0
		@age = @age + 1
		@height = @height + 2
		if @age > 5
			@fruits = @fruits + @age
		end
		if @age > 10
			puts "The tree is dead"
			exit
		end
	end

	def countTheOranges
		return @fruits
	end

	def pickAnOrange
		@fruits = @fruits - 1
	end






end

tree = OrangeTree.new
tree.isheight
tree.oneYearPasses
tree.countTheOranges
tree.oneYearPasses
tree.oneYearPasses
tree.oneYearPasses
tree.oneYearPasses
tree.oneYearPasses
tree.oneYearPasses
tree.oneYearPasses
tree.oneYearPasses
tree.oneYearPasses
tree.oneYearPasses
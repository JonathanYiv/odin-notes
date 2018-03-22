# TEST SUBJECTS
describe Run do
	
	describe "attributes" do

		subject do # subject is an instance of class Run
			Run.new(:duration => 32,
							:distance => 5.2,
							:timestamp => "2014-12-22 20:30")
		end

		it { is_expected.to respond_to(:duration) }
		it { is_expected.to respond_to(:distance) }
		it { is_expected.to respond_to(:timestamp)}
		# is equivalent to
		# it responds to "#duration" do
		# 	expect(subject).to respond_to(:duration)
		# end
	end
end




# BEFORE HOOKS
describe RunningWeek do

	describe ".count" do

		context "with 2 logged runs this week and 1 in next" do

			before do
				2.times do
					Run.log(:duration => rand(10),
									:distance => rand(8),
									:timestamp => "2015-01-12 20:30")
				end

				Run.log(:duration => rand(10),
								:distance => rand(8),
								:timestamp => "2015-01-19 20:30")
			end

			context "without arguments" do
				it "returns 3" do
					expect(Run.count).to eql(3)
				end
			end

			context "with :week set to this week" do
				it "returns 2" do
					expect(Run.count(:week => "2015-01-12")).to eql(2)
				end
			end
		end
	end
end

# before is equivalent of writing before(:each) which means "run this code before each example"
# as compared to before(:all) which would run the code only once for the given context





# LET HELPER
# the code placed in a let block executes only the first time a test example calls it and is cached for further calls in the same example

describe RunningWeek do

	let(:monday_run) do
		Run.new(:duration => 32,
						:distance => 5.2,
						:timestamp => "2015-01-14 19:50")
	end

	let(:wednesday_run) do
		Run.new(:duration => 32,
						:distance => 5.2,
						:timestamp => "2015-01-14 19:50")
	end

	let(:runs) { [monday_run, wednesday_run] }

	let(:running_week) { RunningWeek.new(Date.parse("2015-01-12"), runs)}

	describe "#runs" do

		it "returns all runs in the week" do
			expect(running_week.runs).to eql(runs)
		end
	end

	describe "#first_run" do

		it "returns the first run in the week" do
			expect(running_week.first_run).to eql(monday_run)
		end
	end

	describe "#average_distance" do

		it "returns the average distance of all week's runs" do
			expect(running_week.average_distance).to be_within(0.1).of(5.4) # this is a composed matcher
		end
	end
end
# compared to the before hook, this data is prepared and referenced as opposed to just prepared but not referenced
# use let to define all object dependencies and keep the body of the example minimal




# EXCEPTION HANDLING

describe RunningWeek do

	describe "initialization" do

		context "given a date which is not a Monday" do

			it "raises a 'day not Monday' exception" do
				expect { RunningWeek.new(Date.parse("2015-01-13"), []).to raise_error("Day is not Monday")}
			end
		end
	end
end
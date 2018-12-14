# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# format Jbuilder output for frontend
Jbuilder.key_format camelize: :lower

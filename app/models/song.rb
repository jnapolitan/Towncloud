class Song < ApplicationRecord
    validates :title, :genre, presence: true
    
    belongs_to :user
end

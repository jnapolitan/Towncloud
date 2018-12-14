class Song < ApplicationRecord
    validates :title, :genre, presence: true
    validates :image, attached: true
    belongs_to :user

    has_one_attached :image
    # has_one_attached :audio
end

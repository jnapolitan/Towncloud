class Song < ApplicationRecord
    validates :title, :genre, presence: true
    validate :ensure_image
    validate :ensure_audio

    has_one_attached :image
    has_one_attached :audio

    belongs_to :user
    has_many :comments

    def ensure_image
        unless self.image.attached?
            errors[:image] << "must be attached"
        end
    end

    def ensure_audio
        unless self.audio.attached?
            errors[:audio] << "must be attached"
        end
    end
end

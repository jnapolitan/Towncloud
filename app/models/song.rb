class Song < ApplicationRecord
    validates :title, :genre, presence: true
    belongs_to :user

    validate :ensure_image, :ensure_audio

    has_one_attached :image
    has_one_attached :audio

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

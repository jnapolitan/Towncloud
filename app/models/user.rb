class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :session_token, uniqueness: true
    validates_uniqueness_of :username, case_sensitive: false
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token
    attr_reader :password

    has_many :songs
    has_one_attached :avatar

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return user if user && user.valid_password?(password)
        nil
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
end

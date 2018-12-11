class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :email, presence: true
    validates :username, :session_token, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token
    attr_reader :password

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

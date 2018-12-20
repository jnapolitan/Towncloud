class Api::UsersController < ApplicationController
    def index
        @users = User.all
    end

    def show
        @user = User.find(params[:id])
    end
    
    def create
        @user = User.new(user_params)

        unless @user.location
            @user.location = "New User City, United States"
        end

        if @user.save
            unless @user.avatar.attached?
                blank_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/blank.png')
                @user.avatar.attach(io: blank_avatar, filename: 'blank.png')
            end

            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end 
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :avatar, :location)
    end
end
